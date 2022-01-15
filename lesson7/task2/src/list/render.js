import { getTasksList } from './tasksGateaway.js';

const ListElem = document.querySelector('.list');

const createCheckBox = ({ done, id }) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', id);
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');

  return checkbox;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckBox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-delete-button');
  deleteBtnElem.setAttribute('data-id', id);
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  ListElem.innerHTML = '';
  getTasksList().then(data => {
    const tasksElems = data.sort((a, b) => a.done - b.done).map(createListItem);
    ListElem.append(...tasksElems);
  });
};
