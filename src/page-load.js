import ProfPic from './avatars/avatar-1.png';

export default function () {
  // ---------------------- Header ---------------------

  // Create header element
  const header = document.createElement('div');
  header.classList.add('header');

  // Create header subsection components
  const left = document.createElement('div');
  left.classList.add('header-section');
  left.classList.add('left');

  const right = document.createElement('div');
  right.classList.add('header-section');
  right.classList.add('right');

  // Create left section elements
  const avatar = document.createElement('img');
  avatar.classList.add('avatar');
  avatar.alt = 'Profile Picture';
  avatar.src = ProfPic;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = 'Alex';

  // Add left section elements to left section
  left.appendChild(avatar);
  left.appendChild(name);

  // Create right section elements
  const newProj = document.createElement('div');
  newProj.classList.add('new-proj');
  newProj.classList.add('btn');
  newProj.textContent = '+ Project';

  const newTask = document.createElement('div');
  newTask.classList.add('new-task');
  newTask.classList.add('btn');
  newTask.textContent = '+ Task';

  // Compose form for search bar in right section
  const focus = document.createElement('form');
  focus.classList.add('search-form');

  const label = document.createElement('label');
  label.for = 'filter';
  label.textContent = 'Filter to a specific project:';

  const search = document.createElement('input');
  search.setAttribute('list', 'project-list');
  search.id = 'filter';

  const data = document.createElement('datalist');
  data.id = 'project-list';

  // Add form elements to form
  focus.appendChild(label);
  focus.appendChild(search);
  focus.appendChild(data);

  const clearSearch = document.createElement('div');
  clearSearch.classList.add('clear');
  clearSearch.textContent = 'Clear';

  // Add right section elements to right section
  right.appendChild(newProj);
  right.appendChild(newTask);
  right.appendChild(focus);
  right.appendChild(clearSearch);

  // Add header subsections to header
  header.appendChild(left);
  header.appendChild(right);

  // ---------------------- Container ---------------------

  // Create main container element
  const container = document.createElement('div');
  container.classList.add('container');

  // Create blank box notification
  const blankBox = document.createElement('div');
  blankBox.classList.add('blank-box');

  const blankNote = document.createElement('h1');
  blankNote.textContent = 'You do not have any projects or tasks.';

  blankBox.appendChild(blankNote);

  // Append blank box notification to container

  container.appendChild(blankBox);

  // Create add task form

  const taskForm = document.createElement('form');
  taskForm.classList.add('input-form');
  taskForm.id = 'task-form';

  const formClose = document.createElement('div');
  formClose.classList.add('form-close');
  formClose.textContent = 'X';

  const taskNameLabel = document.createElement('label');
  taskNameLabel.for = 'taskNameField';
  taskNameLabel.textContent = 'Task Name:';
  taskNameLabel.classList.add('form-element');

  const taskNameInput = document.createElement('input');
  taskNameInput.setAttribute('type', 'text');
  taskNameInput.placeholder = 'Task Name';
  taskNameInput.required = true;
  taskNameInput.id = 'taskNameField';
  taskNameInput.classList.add('form-element');

  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.for = 'taskDescriptionField';
  taskDescriptionLabel.textContent = 'Description:';
  taskDescriptionLabel.classList.add('form-element');

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.setAttribute('type', 'text');
  taskDescriptionInput.placeholder = 'Description';
  taskDescriptionInput.required = true;
  taskDescriptionInput.id = 'taskDescriptionField';
  taskDescriptionInput.classList.add('form-element');

  const taskSubmit = document.createElement('button');
  taskSubmit.setAttribute('type', 'submit');
  taskSubmit.classList.add('form-btn');
  taskSubmit.textContent = 'Submit';
  taskSubmit.id = 'taskSubmit';

  // Append sub-components of task form
  taskForm.appendChild(formClose);
  taskForm.appendChild(taskNameLabel);
  taskForm.appendChild(taskNameInput);
  taskForm.appendChild(taskDescriptionLabel);
  taskForm.appendChild(taskDescriptionInput);
  taskForm.appendChild(taskSubmit);

  // Append add task form to container
  container.appendChild(taskForm);

  // Create add project form

  const projectForm = document.createElement('form');
  projectForm.classList.add('input-form');
  projectForm.id = 'project-form';

  const projNameLabel = document.createElement('label');
  projNameLabel.for = 'projNameField';
  projNameLabel.textContent = 'Project Name:';
  projNameLabel.classList.add('form-element');

  const projNameInput = document.createElement('input');
  projNameInput.setAttribute('type', 'text');
  projNameInput.placeholder = 'Project Name';
  projNameInput.required = true;
  projNameInput.id = 'projNameField';
  projNameInput.classList.add('form-element');

  const projDescriptionLabel = document.createElement('label');
  projDescriptionLabel.for = 'projDescriptionField';
  projDescriptionLabel.textContent = 'Description:';
  projDescriptionLabel.classList.add('form-element');

  const projDescriptionInput = document.createElement('input');
  projDescriptionInput.setAttribute('type', 'text');
  projDescriptionInput.placeholder = 'Description';
  projDescriptionInput.required = true;
  projDescriptionInput.id = 'projDescriptionField';
  projDescriptionInput.classList.add('form-element');

  const projSubmit = document.createElement('button');
  projSubmit.setAttribute('type', 'submit');
  projSubmit.classList.add('form-btn');
  projSubmit.textContent = 'Submit';
  projSubmit.id = 'projSubmit';

  // Append sub-components of project form
  projectForm.appendChild(formClose);
  projectForm.appendChild(projNameLabel);
  projectForm.appendChild(projNameInput);
  projectForm.appendChild(projDescriptionLabel);
  projectForm.appendChild(projDescriptionInput);
  projectForm.appendChild(projSubmit);

  // Append add project form to container
  container.appendChild(projectForm);

  /** Additional Functionality to add later: page loads 'un-assigned' project column. */

  // ---------------------- Footer ---------------------

  // Create footer element
  const footer = document.createElement('div');
  footer.classList.add('footer');

  // Create footer text
  const footerText = document.createElement('p');
  footerText.textContent = '\u00A9 Alex Wurm';

  // Add footer text to footer
  footer.appendChild(footerText);

  // Add header, container, and footer to body
  const body = document.querySelector('body');
  body.appendChild(header);
  body.appendChild(container);
  body.appendChild(footer);
}
