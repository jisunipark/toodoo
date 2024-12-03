import { createInputItemElement, paintTodo } from './paint.js';
import { handleDeleteTodo } from './handle.js';
import { getTodos } from './crud.js';

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

// 렌더링 시 localStorage 있는 값들을 확인하여 DOM에 그리기
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

// 아이템 추가 버튼 클릭 시 입력창 아이템 요소가 추가되도록
const $addButton = document.getElementById('add-button');

$addButton.addEventListener('click', () => {
  const $todoInputItem = document.querySelector('.input');
  if ($todoInputItem) return;
  $itemList.appendChild(createInputItemElement());
});
