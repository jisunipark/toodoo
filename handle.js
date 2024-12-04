import { openModal, $itemList, $modal } from './index.js';
import { addTodo, deleteTodo, editTodo } from './crud.js';
import { createInputItemElement, paintTodo } from './paint.js';
import { getFormattedDate } from './util.js';

/* 
  아이템 hover 관련
*/

export const handleMouseOver = (e) => e.currentTarget.classList.add('hover');
export const handleMouseLeave = (e) => e.currentTarget.classList.remove('hover');

/* 
  아이템 추가 관련
*/

export const handleClickAddIcon = () => {
  const $todoInputItem = document.querySelector('.input');
  if ($todoInputItem) return;
  $itemList.appendChild(createInputItemElement());
};

export const handleEnterAdd = (e) => {
  if (e.key === 'Enter' && !e.isComposing) {
    const newItem = {
      checked: false,
      todo: e.target.value,
      date: getFormattedDate(new Date()),
    };
    paintTodo(newItem);
    addTodo(newItem);
    e.target.value = '';
  }
};

export const handleCloseInput = (e) => {
  if (e.key === 'Escape') {
    $itemList.removeChild(document.querySelector('.input'));
  }
};

/* 
  아이템 편집 관련
*/

export const handleClickEditIcon = (e) => {
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

export const handleEnterEdit = (e) => {
  if (e.key === 'Enter' && !e.isComposing) {
    const $parentItem = e.target.parentNode;
    const $todo = document.createElement('span');
    const todoText = document.createTextNode(e.target.value);
    $todo.appendChild(todoText);
    $todo.classList.add('todo');

    const $date = $parentItem.querySelector('.date');
    $parentItem.removeChild(e.target);
    $parentItem.insertBefore($todo, $date);
    $parentItem.addEventListener('mouseover', handleMouseOver);

    editTodo($parentItem.id, e.target.value);
    // setTodos();
  }
};

export const handleToggleCheckbox = (e) => {
  const $parentItem = e.currentTarget.parentNode;
  $parentItem.classList.toggle('done');
  const targetId = $parentItem.id;
  todos.find((todo) => todo.id === targetId).checked = !todos.find((todo) => todo.id === targetId)
    .checked;
  // setTodos();
};

/* 
  아이템 삭제 관련
*/

export const handleClickDeleteIcon = (e) => {
  const id = e.currentTarget.parentNode.parentNode.id;
  $modal.id = id;
  openModal(id);
};

export const handleDeleteTodo = (e) => {
  const id = e.currentTarget.parentNode.parentNode.parentNode.id;
  $itemList.removeChild(document.getElementById(id));

  deleteTodo(id);
};
