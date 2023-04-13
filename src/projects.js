import modalDefault from './modals';

// Import Storage
import { defaultExport, todoStorage } from './storage.js';

export const projectList = [];
window.projectList = projectList;

export default class Project {
  tasks;

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length > 10) {
      alert('Name is too long.');
      return;
    }
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    if (value.length > 50) {
      alert('Description is too long.');
      return;
    }
    this._description = value;
  }

  getTasks = () => {
    return this.tasks;
  };

  getTaskNames = () => {
    return this.tasks.map((x) => x.name);
  };

  addTask = (task) => {
    this.tasks.push(task);
  };

  removeTask = (task) => {
    const idx = this.getTaskNames().indexOf(task.name);
    this.tasks.splice(idx, 1);
  };
}

// TODO: Add logic to check for and prevent projecs with duplicate names

export function addProject(e) {
  e.preventDefault();

  // Global declarations
  const container = document.querySelector('.container');

  // Retrieve values from form
  const projName = document.getElementById('projNameField').value;
  const projDescription = document.getElementById('projDescriptionField').value;

  // Don't complete function action if no input provided
  if (!projName || !projDescription) return;

  // Hide no projects notice if first project being added
  // and eventlistener & assign to project button for tasks
  if (projectList.length == 0) {
    const blankBox = document.querySelector('.blank-box');
    blankBox.style.display = 'none';

    const addTask = document.querySelector('.new-task.btn');
    addTask.addEventListener('click', modalDefault);
    addTask.classList.add('active');
  }

  // Create project object and add it to the global projects list
  let proj = new Project(projName, projDescription);
  projectList.push(proj);

  // Add option to datalist for search inputs
  const dataList = document.getElementById('project-list');
  const projOption = document.createElement('option');
  projOption.id = projName;
  projOption.value = projName;
  dataList.appendChild(projOption);

  // Add equivalent to select in task form
  const taskProjSelect = document.getElementById('taskProjField');
  const projSelect = document.createElement('option');
  projSelect.id = `task-${projName}`;
  projSelect.value = projName;
  projSelect.textContent = projName;
  taskProjSelect.appendChild(projSelect);

  // Create project DOM element and add sub-components
  const newProj = document.createElement('div');
  newProj.classList.add('project');
  newProj.setAttribute('name', projName);

  const newProjDelete = document.createElement('div');
  newProjDelete.classList.add('proj-delete');
  newProjDelete.textContent = 'X';
  newProjDelete.addEventListener('click', removeProject);

  const newProjName = document.createElement('h1');
  newProjName.classList.add('proj-name');
  newProjName.textContent = projName;

  const newProjDescription = document.createElement('p');
  newProjDescription.classList.add('proj-description');
  newProjDescription.textContent = projDescription;

  const newProjContent = document.createElement('div');
  newProjContent.classList.add('proj-content');

  newProj.appendChild(newProjDelete);
  newProj.appendChild(newProjName);
  newProj.appendChild(newProjDescription);
  newProj.appendChild(newProjContent);

  // Append project to container div
  container.appendChild(newProj);

  // Clear values and close form
  document.getElementById('projNameField').value = '';
  document.getElementById('projDescriptionField').value = '';
  const projForm = document.getElementById('project-form');
  projForm.classList.remove('active');

  // Update storage
  todoStorage.updateStoredProjectList();
  todoStorage.saveProjectList();
}

export function removeProject(e) {
  const proj = e.target.parentElement;

  // Remove project from global projects list
  const projectNamesList = projectList.map((x) => x.name);
  const projIdx = projectNamesList.indexOf(proj.children[1].textContent);
  projectList.splice(projIdx, 1);

  // Remove project from datalist for search inputs
  const projOption = document.getElementById(proj.children[1].textContent);
  projOption.remove();

  // Remove equivalent option within select in task form
  const taskProjOption = document.getElementById(
    `task-${proj.children[1].textContent}`
  );
  taskProjOption.remove();

  // Delete project DOM element
  proj.remove();

  // Re-display no projects notice if all projects have been deleted
  // Also remove event listener and active class
  if (projectList.length == 0) {
    const blankBox = document.querySelector('.blank-box');
    blankBox.style.display = 'flex';

    const removeTask = document.querySelector('.new-task.btn.active');
    removeTask.removeEventListener('click', modalDefault);
    removeTask.classList.remove('active');
  }

  // Update storage
  todoStorage.updateStoredProjectList();
  todoStorage.saveProjectList();
}

export function filterProject(e) {
  const searchValue = e.target.value;
  const projNames = projectList.map((x) => x.name);

  console.log(projNames);

  if (projNames.includes(searchValue)) {
    const idx = projNames.indexOf(searchValue);

    for (let i = 0; i < projNames.length; i++) {
      if (i != idx) {
        const proj = document.getElementsByClassName('project')[i];
        proj.style.display = 'none';
      }
    }
  }
}

export function clearFilter(e) {
  // Add DOM elements back to display
  const projects = document.getElementsByClassName('project');
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = 'flex';
  }

  // Clear filter field text
  const filterText = document.getElementById('filter');
  filterText.value = '';
}

// Additional functionality to add later
// export function modifyProject(project, property) {}
