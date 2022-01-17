import { renderTasks } from './list/render.js';
import { initTodoListHandLers } from './list/todoList.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  initTodoListHandLers();
});
