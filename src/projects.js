export const projectList = [];
window.projectList = projectList;

export default class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
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

  tasks = [];

  getTasks = () => {
    return this._tasks;
  };

  getTaskNames = () => {
    return this._tasks.map((x) => x.name);
  };

  addTask = (task) => {
    this._tasks.push(task);
  };

  removeTask = (task) => {
    const idx = this._taskNames.indexOf(task.name);
    this._tasks.splice(idx, 1);
  };
}

export function addProject(e) {
  e.preventDefault();

  // Global declarations
  const container = document.querySelector('.container');

  // Retrieve values from form
  const projName = document.getElementById('projNameField').value;
  const projDescription = document.getElementById('projDescriptionField').value;

  console.log(projName);
  console.log(projDescription);

  // Don't complete function action if no input provided
  if (!projName || !projDescription) return;

  // Hide no projects notice if first project being added
  if (projectList.length == 0) {
    const blankBox = document.querySelector('.blank-box');
    blankBox.style.display = 'none';
  }

  // Creae project object and add it to the global projects list
  let proj = new Project(projName, projDescription);
  projectList.push(proj);

  // Create project DOM element and add sub-components
  const newProj = document.createElement('div');
  newProj.classList.add('project');

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
}

export function removeProject(e) {
  const proj = e.target.parentElement;
  console.log(proj);

  // Remove project from global projects list
  const projectNamesList = projectList.map((x) => x.name);
  console.log(projectNamesList);
  const projIdx = projectNamesList.indexOf(proj.children[1].textContent);
  console.log(projIdx);
  projectList.splice(projIdx, 1);

  // Delete project DOM element
  proj.remove();

  // Re-display no projects notice if all projects have been deleted
  if (projectList.length == 0) {
    const blankBox = document.querySelector('.blank-box');
    blankBox.style.display = 'flex';
  }
}

// Additional functionality to add later
// export function modifyProject(project, property) {}
