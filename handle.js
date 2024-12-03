import { getFormattedDate } from './util.js';
import { openModal, $itemList, $modal } from './index.js';
import { paintTodo } from './paint.js';
import { setTodos, deleteTodo, editTodo } from './crud.js';

export const handleMouseOver = (e) => e.currentTarget.classList.add('hover');
export const handleMouseLeave = (e) => e.currentTarget.classList.remove('hover');

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

export const handleEnterEdit = (e) => {
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
    editTodo($parentItem.id, e.target.value);

    // 로컬 스토리지에 저장
    setTodos();
  }
};

export const handleClickDelete = (e) => {
  const id = e.currentTarget.parentNode.parentNode.id;
  $modal.id = id;
  openModal(id);
};

// 체크박스 클릭 시 todos와 localStorage에 변경 사항 반영
export const toggleCheckbox = (e) => {
  const $parentItem = e.currentTarget.parentNode;
  $parentItem.classList.toggle('done');
  const targetId = $parentItem.id;
  todos.find((todo) => todo.id === targetId).checked = !todos.find((todo) => todo.id === targetId)
    .checked;
  setTodos();
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

export const handleDeleteTodo = (e) => {
  // DOM에 반영
  const id = e.currentTarget.parentNode.parentNode.parentNode.id;
  $itemList.removeChild(document.getElementById(id));

  // todos 배열에 반영
  deleteTodo(id);

  // 로컬 스토리지에 저장
  setTodos();
};
