import { createInputItemElement, paintTodo } from './paint.js';
import { getFormattedDate } from './util.js';

const $itemList = document.querySelector('.item-list');
const $emptyMsg = document.querySelector('.empty-msg');

export const todos = [];

// todos 배열을 local storage에 동기화 시킴
export const saveTodo = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// 렌더링 시 localStorage 있는 값들을 확인하여 DOM에 그리기
const loadTodos = () => {
  const loadedTodos = JSON.parse(localStorage.getItem('todos'));
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

// 엔터 시 아이템 추가
export const addTodoItem = (e) => {
  if (e.key === 'Enter' && !e.isComposing) {
    const newItem = {
      id: crypto.randomUUID(),
      checked: false,
      todo: e.target.value,
      date: getFormattedDate(new Date()),
    };
    paintTodo(newItem);
    e.target.value = '';
  }
};

// esc 누르면 입력창 사라짐
export const closeInputItem = (e) => {
  if (e.key === 'Escape') {
    $itemList.removeChild(document.querySelector('.input'));
  }
};
