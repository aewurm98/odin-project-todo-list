export default function activate(e) {
  let modal;

  if (e.target.classList.contains('new-task')) {
    modal = document.getElementById('task-form');
  } else if (e.target.classList.contains('new-proj')) {
    modal = document.getElementById('project-form');
  } else return;

  if (!modal.classList.contains('active')) {
    modal.classList.add('active');
  }
  return;
}

export function deactivate(e) {
  // Grab possible modal DOM references
  const taskName = document.getElementById('taskNameField');
  const taskDescription = document.getElementById('taskDescriptionField');
  const projName = document.getElementById('projNameField');
  const projDescription = document.getElementById('projDescriptionField');

  const modal = e.target.parentElement;
  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
    taskName.value = '';
    taskDescription.value = '';
    projName.value = '';
    projDescription.value = '';
  }

  return;
}
