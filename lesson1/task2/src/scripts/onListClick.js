import { onDeleteTask } from './deleteTask.js';
import { onToggleTask } from './updateTask.js';

export const onListClick = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  const isDeleteBtn = e.target.classList.contains('list-delete-button');
  if (isCheckbox) {
    onToggleTask(e);
  }
  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};
