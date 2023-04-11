// Import date modification functions

import {
  add,
  compareAsc,
  format,
  formatDistance,
  formatDistanceToNow,
  formatRelative,
  isAfter,
  isBefore,
  isDate,
  isEqual,
  isPast,
  isFuture,
  set,
  sub,
  daysToWeeks,
  isToday,
} from 'date-fns';

// Import key information from Projects
import projectDefault, * as Project from './projects.js';

export default class Task {
  constructor(name, description, dueDate, project) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
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
    if (isPast(value)) {
      alert('Due date has already passed');
      return;
    }
    this._dueDate = format(new Date(value), 'LLL do y');
  }

  getProject = () => {
    return this._project;
  };

  // TODO: Bind methods and re-add 'this.' notation to access appropriate fields'

  complete = false;

  markComplete = () => {
    complete = true;
  };

  markIncomplete = () => {
    complete = false;
  };
}

export function addTask(e) {
  e.preventDefault();

  // Retrieve values from form
  const taskName = document.getElementById('taskNameField').value;
  const taskDescription = document.getElementById('taskDescriptionField').value;
  const taskDueDate = document.getElementById('taskDateField').value;
  const taskProject = document.getElementById('taskProjField').value;

  console.log('test1');
  // Don't complete function action if no input provided
  if (!taskName || !taskDescription || !taskDueDate || !taskProject) return;
  console.log('test2');

  // Create task object and add it to the parent project's [tasks] field
  const projectNames = Project.projectList.map((x) => x.name);
  const parentProject = Project.projectList[projectNames.indexOf(taskProject)];

  let task = new Task(taskName, taskDescription, taskDueDate, taskProject);
  parentProject.addTask(task);

  // Create task DOM element and add sub-components
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  const newTaskDelete = document.createElement('div');
  newTaskDelete.classList.add('task-delete');
  newTaskDelete.textContent = 'x';

  const newTaskName = document.createElement('h2');
  newTaskName.classList.add('task-name');
  newTaskName.textContent = taskName;

  const newTaskDescription = document.createElement('p');
  newTaskDescription.add('task-description');
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

  // Append task element to parent project's content child div
  newTask.appendChild(newTaskDelete);
  newTask.appendChild(newTaskName);
  newTask.appendChild(newTaskDescription);
  newTask.appendChild(newTaskDueDate);
  newTask.appendChild(newTaskProject);
  newTask.appendChild(newTaskComplete);

  const projectContent = parentProject.children[3];
  projectContent.appendChild(newTask);

  // Clear values and close form
  document.getElementById('taskNameField').value = '';
  document.getElementById('taskDescriptionField').value = '';
  document.getElementById('taskDateField').value = '';
  document.getElementById('taskProjField').value = '';

  const taskForm = document.getElementById('task-form');
  taskForm.classList.remove('active');
}

export function removeTask(e) {}

export function toggleComplete(e) {}

// Advanced functionality to add later
// export function modifyTask(e) {}
