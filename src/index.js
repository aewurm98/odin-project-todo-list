// Import style sheet
import './style.css';

// Import other JS modules

import loadPage from './page-load.js';
import * as Project from './projects.js';
import * as Todos from './todos.js';
import * as Modals from './modals.js';
import * as Storage from './storage.js';

// Initialize content
loadPage();

// Restore local memory
Storage.loadFromStorage();

// Gather declarations for interactive elements
const addProj = document.querySelector('.new-proj.btn.active');
const addTask = document.querySelector('.new-task.btn');
const clear = document.querySelector('.clear');
const submitTask = document.getElementById('taskSubmit');
const submitProj = document.getElementById('projSubmit');
const taskForm = document.getElementById('task-form');
const projectForm = document.getElementById('project-form');
const formEscapes = document.querySelectorAll('.form-close');
const filter = document.getElementById('filter');

// Add relevant event listeners

// Proj Event Listeners
addProj.addEventListener('click', Modals.default);
submitProj.addEventListener('click', Project.addProject);
submitTask.addEventListener('click', Todos.addTask);

// Modal Event Listeners
formEscapes.forEach((btn) => btn.addEventListener('click', Modals.deactivate));

// Filter Event Listener
filter.addEventListener('input', Project.filterProject);

// Clear Event Listener
clear.addEventListener('click', Project.clearFilter);
