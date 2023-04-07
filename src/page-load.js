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
