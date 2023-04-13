// Import date modification functions

import { format, isPast, parseISO } from 'date-fns';

// Import content modules
import * as Project from './projects.js';
import * as Todo from './todos.js';
import modalDefault from './modals';

export default class Storage {
  todoList;

  constructor() {
    this.todoList = [];
  }

  getStoredProjectList() {
    return this.todoList;
  }

  updateStoredProjectList() {
    this.todoList = Project.projectList;
  }

  saveProjectList() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  getLocalStorage() {
    return localStorage.getItem('todoList');
  }
}

export function buildProjectFromMemory(name, description) {
  // Global declarations
  const container = document.querySelector('.container');

  // Retrieve values from form
  const projName = name;
  const projDescription = description;

  // Don't complete function action if no input provided
  if (!projName || !projDescription) return;

  // Hide no projects notice if first project being added
  // and eventlistener & assign to project button for tasks
  if (Project.projectList.length == 0) {
    const blankBox = document.querySelector('.blank-box');
    blankBox.style.display = 'none';

    const addTask = document.querySelector('.new-task.btn');
    addTask.addEventListener('click', modalDefault);
    addTask.classList.add('active');
  }

  // Create project object and add it to the global projects list
  let proj = new Project.default(projName, projDescription);
  Project.projectList.push(proj);

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
  newProjDelete.addEventListener('click', Project.removeProject);

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

  // Update storage
  todoStorage.updateStoredProjectList();
  todoStorage.saveProjectList();
}

export function buildTaskFromMemory(
  name,
  description,
  dueDate,
  project,
  complete
) {
  // Retrieve values from form
  const taskName = name;
  const taskDescription = description;
  const unformattedDate = dueDate;
  const taskProject = project;
  const taskComplete = complete;

  // Don't complete function action if no input provided
  if (!taskName || !taskDescription || !unformattedDate || !taskProject) return;

  // Format due date
  const taskDueDate = format(new Date(parseISO(unformattedDate)), 'MMM do y');

  // Create task object and add it to the parent project's [tasks] field
  const projectNames = Project.projectList.map((x) => x.name);
  const parentProject = Project.projectList[projectNames.indexOf(taskProject)];

  let task = new Todo.default(
    taskName,
    taskDescription,
    unformattedDate,
    taskProject
  );
  parentProject.addTask(task);

  // Create task DOM element and add sub-components
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  const newTaskDelete = document.createElement('div');
  newTaskDelete.classList.add('task-delete');
  newTaskDelete.textContent = 'x';
  newTaskDelete.addEventListener('click', Todo.removeTask);

  const newTaskName = document.createElement('h2');
  newTaskName.classList.add('task-name');
  newTaskName.textContent = taskName;

  const newTaskDescription = document.createElement('p');
  newTaskDescription.classList.add('task-description');
  newTaskDescription.textContent = taskDescription;

  const newTaskDueDate = document.createElement('p');
  newTaskDueDate.classList.add('task-date');
  newTaskDueDate.textContent = taskDueDate;

  const newTaskProject = document.createElement('p');
  newTaskProject.classList.add('task-project');
  newTaskProject.textContent = taskProject;

  const newTaskComplete = document.createElement('input');
  newTaskComplete.classList.add('task-complete');
  newTaskComplete.setAttribute('type', 'checkbox');
  if (complete) newTaskComplete.setAttribute('checked', true);
  newTaskComplete.addEventListener('click', Todo.toggleComplete);

  // Append task element to parent project's content child div
  newTask.appendChild(newTaskDelete);
  newTask.appendChild(newTaskName);
  newTask.appendChild(newTaskDescription);
  newTask.appendChild(newTaskDueDate);
  newTask.appendChild(newTaskProject);
  newTask.appendChild(newTaskComplete);

  const projectContent = document.getElementsByName(parentProject.name)[0]
    .children[3];
  projectContent.appendChild(newTask);

  // Update Storage
  todoStorage.updateStoredProjectList();
  todoStorage.saveProjectList();
}

// Initialize storage
export const todoStorage = new Storage();
window.todoStorage = todoStorage;

export function loadFromStorage() {
  // Check if localStorage is populated
  if (!localStorage.todoList) return;

  // Parse stored todo list
  const storedToDos = JSON.parse(todoStorage.getLocalStorage());

  // Build projects and nested tasks from parsed list

  for (let i = 0; i < storedToDos.length; i++) {
    const projName = storedToDos[i]._name;
    const projDescription = storedToDos[i]._description;
    const projTasks = storedToDos[i].tasks;

    buildProjectFromMemory(projName, projDescription);

    for (let j = 0; j < projTasks.length; j++) {
      const taskName = projTasks[j]._name;
      const taskDescription = projTasks[j]._description;
      const taskDueDate = projTasks[j]._dueDate;
      const taskProject = projTasks[j].project;
      const taskComplete = projTasks[j].complete;

      buildTaskFromMemory(
        taskName,
        taskDescription,
        taskDueDate,
        taskProject,
        taskComplete
      );
    }
  }
}
