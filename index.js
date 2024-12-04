import { getTodos } from './crud.js';
import { handleClickAddIcon, handleDeleteTodo } from './handle.js';
import { paintTodo } from './paint.js';

export const $modal = document.querySelector('.modal');
export const $itemList = document.querySelector('.item-list');
export const $emptyMsg = document.querySelector('.empty-msg');
const $addButton = document.getElementById('add-button');

const closeModal = () => {
  $modal.style.display = 'none';
};

export const openModal = () => {
  $modal.style.display = 'flex';

  $modal.querySelector('.delete-button').addEventListener('click', handleDeleteTodo);
  $modal.querySelector('.cancel-button').addEventListener('click', closeModal);
};

export const loadTodos = (todos) => {
  if (!todos.length) {
    $emptyMsg.style.display = 'flex';
  } else {
    todos.forEach((item) => {
      paintTodo(item);
    });
  }
};

const init = () => {
  getTodos();
  $addButton.addEventListener('click', handleClickAddIcon);
};

init();
