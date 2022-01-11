import { renderTasks } from './render.js';
import { initTodoListHandLers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  initTodoListHandLers();
});


