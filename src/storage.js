// Import content modules
import Project from './projects.js';
import Todo from './todos.js';

export default class Storage {
  #todoList;

  constructor() {
    this.#todoList = [];
  }

  getStoredProjectList() {
    return this.#todoList;
  }

  updateStoredProjectList() {
    console.log(Project.projectList);
    console.log(this.#todoList);
    this.#todoList = Project.projectList;
    console.log(this.#todoList);
  }

  saveProjectList() {
    console.log(this.#todoList);
    localStorage.setItem('todoList', JSON.stringify(this.#todoList));
    console.log(JSON.stringify(this.#todoList));
  }

  getLocalStorage() {
    return localStorage.getItem('todoList');
  }

  setToLocalStorage() {
    this.#todoList = localStorage.getItem('todoList');
  }
}

// TODO: Figure out storage implementation

// Initialize storage
export const todoStorage = new Storage();
window.todoStorage = todoStorage;

export function loadFromStorage() {}
