import { renderTasks } from './render.js';
import { deleteTask, getTasksList } from './tasksGateaway.js';

export const onDeleteTask = e => {
  const taskId = e.target.dataset.id;
  deleteTask(taskId).then(() => {
    renderTasks();
  });
};
