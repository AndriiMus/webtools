import { renderTasks } from './render.js';
import { createTask, getTasksList } from './tasksGateaway.js';

export const onCreateTask = () => {
  const intTask = document.querySelector('.task-input');
  const text = intTask.value;
  if (text === '') {
    return;
  }
  intTask.value = '';

  const newTasks = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  createTask(newTasks).then(() => renderTasks());
};
