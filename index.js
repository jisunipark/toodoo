import { createInputItemElement, paintTodo } from './paint.js';
import { getFormattedDate } from './util.js';

const $itemList = document.querySelector('.item-list');
const $emptyMsg = document.querySelector('.empty-msg');

export const todos = [];

export const handleMouseOver = (e) => e.currentTarget.classList.add('hover');
export const handleMouseLeave = (e) => e.currentTarget.classList.remove('hover');

// todos 배열을 local storage에 동기화 시킴
export const saveTodo = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// 체크박스 클릭 시 todos와 localStorage에 변경 사항 반영
export const toggleCheckbox = (e) => {
  const $parentItem = e.currentTarget.parentNode;
  $parentItem.classList.toggle('done');
  const targetId = $parentItem.id;
  todos.find((todo) => todo.id === targetId).checked = !todos.find((todo) => todo.id === targetId)
    .checked;
  saveTodo();
};

const handleEnterEdit = (e) => {
  if (e.key === 'Enter' && !e.isComposing) {
    // DOM에 반영
    const $parentItem = e.target.parentNode;
    const $todo = document.createElement('span');
    const todoText = document.createTextNode(e.target.value);
    $todo.appendChild(todoText);
    $todo.classList.add('todo');

    const $date = $parentItem.querySelector('.date');
    $parentItem.removeChild(e.target);
    $parentItem.insertBefore($todo, $date);

    $parentItem.addEventListener('mouseover', handleMouseOver);

    // todos 배열에 반영
    const thisTodo = todos.find((todo) => todo.id === $parentItem.id);
    thisTodo.todo = e.target.value;

    // 로컬 스토리지에 저장
    saveTodo();
  }
};

export const handleClickEdit = (e) => {
  const $parentItem = e.currentTarget.parentNode.parentNode;
  const $todo = $parentItem.querySelector('.todo');
  $parentItem.removeChild($todo);

  const $todoInput = document.createElement('input');
  $todoInput.type = 'text';
  $todoInput.classList.add('todo-input', 'editting');
  $todoInput.value = $todo.textContent;

  const $date = $parentItem.querySelector('.date');
  $parentItem.removeEventListener('mouseover', handleMouseOver);
  $parentItem.insertBefore($todoInput, $date);

  $todoInput.addEventListener('keydown', handleEnterEdit);
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
export const handleAddTodo = (e) => {
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
export const handleCloseInput = (e) => {
  if (e.key === 'Escape') {
    $itemList.removeChild(document.querySelector('.input'));
  }
};
