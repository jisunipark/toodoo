import { getTodos } from './crud.js';
import { handleDeleteTodo } from './handle.js';
import { createInputItemElement, paintTodo } from './paint.js';

export const $itemList = document.querySelector('.item-list');
export const $emptyMsg = document.querySelector('.empty-msg');
export const $modal = document.querySelector('.modal');

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

loadTodos();

const $addButton = document.getElementById('add-button');

$addButton.addEventListener('click', () => {
  const $todoInputItem = document.querySelector('.input');
  if ($todoInputItem) return;
  $itemList.appendChild(createInputItemElement());
});
