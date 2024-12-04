import { getTodos } from './crud.js';
import { handleClickAddIcon, handleDeleteTodo } from './handle.js';
import { createInputItemElement, paintTodo } from './paint.js';

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

const loadTodos = () => {
  const loadedTodos = getTodos();
  if (!loadedTodos || !loadedTodos.length) {
    localStorage.setItem('todos', '[]');
    $emptyMsg.style.display = 'flex';
  } else {
    loadedTodos.forEach((item) => {
      paintTodo(item);
    });
  }
};

const init = () => {
  loadTodos();
  $addButton.addEventListener('click', handleClickAddIcon);
};

init();
