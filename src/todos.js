// Import date modification functions

import { format, isPast, parseISO } from 'date-fns';

// Import key information from Projects
import projectDefault, * as Project from './projects.js';

// Import Storage
import { defaultExport, todoStorage } from './storage.js';

export default class Task {
  complete;
  constructor(name, description, dueDate, project) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.complete = false;
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

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    if (!value) return;

    if (isPast(value)) {
      alert('Due date has already passed');
      return;
    }
    this._dueDate = value;
  }

  getProject = () => {
    return this._project;
  };

  getComplete = () => {
    return this.complete;
  };

  setComplete = (value) => {
    this.complete = value;
  };
}

export function addTask(e) {
  e.preventDefault();

  // Retrieve values from form
  const taskName = document.getElementById('taskNameField').value;
  const taskDescription = document.getElementById('taskDescriptionField').value;
  const unformattedDate = document.getElementById('taskDateField').value;
  const taskProject = document.getElementById('taskProjField').value;

  // Don't complete function action if no input provided
  if (!taskName || !taskDescription || !unformattedDate || !taskProject) return;

  // Format due date
  const taskDueDate = format(new Date(parseISO(unformattedDate)), 'MMM do y');

  // Create task object and add it to the parent project's [tasks] field
  const projectNames = Project.projectList.map((x) => x.name);
  const parentProject = Project.projectList[projectNames.indexOf(taskProject)];

  let task = new Task(taskName, taskDescription, unformattedDate, taskProject);
  parentProject.addTask(task);

  // Create task DOM element and add sub-components
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  const newTaskDelete = document.createElement('div');
  newTaskDelete.classList.add('task-delete');
  newTaskDelete.textContent = 'x';
  newTaskDelete.addEventListener('click', removeTask);

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
  newTaskComplete.addEventListener('click', toggleComplete);

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

  // Clear values and close form
  document.getElementById('taskNameField').value = '';
  document.getElementById('taskDescriptionField').value = '';
  document.getElementById('taskDateField').value = '';
  document.getElementById('taskProjField').value = '';

  const taskForm = document.getElementById('task-form');
  taskForm.classList.remove('active');

  // Update Storage
  todoStorage.updateStoredProjectList();
  todoStorage.saveProjectList();
}

export function removeTask(e) {
  // Remove task from parent project's task list
  const task = e.target.parentElement;
  const parentProjName = task.children[4].textContent;
  const projNames = Project.projectList.map((x) => x.name);
  const projObj = Project.projectList[projNames.indexOf(parentProjName)];
  const allTasks = projObj.getTasks();
  const taskNames = projObj.getTaskNames();
  const name = task.children[1].textContent;
  const idx = taskNames.indexOf(name);
  const taskObj = allTasks[idx];
  projObj.removeTask(taskObj);

  // Delete task DOM element
  task.remove();

  // Update storage
  todoStorage.updateStoredProjectList();
  todoStorage.saveProjectList();
}

export function toggleComplete(e) {
  const checkBox = e.target;
  const task = e.target.parentElement;
  const taskName = task.children[1].textContent;
  const projName = task.children[4].textContent;

  const projNames = Project.projectList.map((x) => x.name);
  const projObj = Project.projectList[projNames.indexOf(projName)];
  const taskObj = projObj.getTasks()[projObj.getTaskNames().indexOf(taskName)];

  const currentStatus = taskObj.getComplete();

  if (currentStatus) {
    taskObj.setComplete(false);
  } else if (!currentStatus) {
    taskObj.setComplete(true);
  }

  // Update storage
  todoStorage.updateStoredProjectList();
  todoStorage.saveProjectList();
}

// Advanced functionality to add later
// export function modifyTask(e) {}
