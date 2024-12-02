import { todos, saveTodo } from './index.js';
import {
  handleAddTodo,
  handleCloseInput,
  handleClickDelete,
  toggleCheckbox,
  handleClickEdit,
  handleMouseLeave,
  handleMouseOver,
} from './handle.js';

// 입력창 아이템 요소를 생성하여 반환하는 함수
export const createInputItemElement = () => {
  const $emptyMsg = document.querySelector('.empty-msg');
  $emptyMsg.style.display = 'none';

  const $div = document.createElement('div');
  $div.classList.add('item', 'input');

  const $checkboxInput = document.createElement('input');
  $checkboxInput.type = 'checkbox';

  const $todoInput = document.createElement('input');
  $todoInput.type = 'text';
  $todoInput.classList.add('todo-input');
  $todoInput.addEventListener('keydown', handleAddTodo);
  $todoInput.addEventListener('keydown', handleCloseInput);

  const $small = document.createElement('small');
  const textNode = document.createTextNode('24/11/27');
  $small.appendChild(textNode);
  $small.classList.add('date');

  const $editImg = document.createElement('img');
  const $deleteImg = document.createElement('img');
  $editImg.src = 'assets/material-symbols_edit-outline.svg';
  $deleteImg.src = 'assets/material-symbols_delete.svg';

  const $editButton = document.createElement('button');
  $editButton.type = 'button';
  $editButton.classList.add('edit-button');
  $editButton.appendChild($editImg);

  const $deleteButton = document.createElement('button');
  $deleteButton.type = 'button';
  $deleteButton.classList.add('delete-button');
  $deleteButton.appendChild($deleteImg);

  const $buttonDiv = document.createElement('div');
  $buttonDiv.classList.add('button-pair');
  $buttonDiv.appendChild($editButton);
  $buttonDiv.appendChild($deleteButton);

  $div.appendChild($checkboxInput);
  $div.appendChild($todoInput);
  $div.appendChild($small);
  $div.appendChild($buttonDiv);

  return $div;
};

// 투두 아이템 요소를 생성한 후 item list에 추가하는 함수
export const paintTodo = (item) => {
  const { id, checked, todo, date } = item;

  const $div = document.createElement('div');
  $div.classList.add('item');
  $div.id = id;

  const $checkboxInput = document.createElement('input');
  $checkboxInput.type = 'checkbox';
  $checkboxInput.checked = checked;
  checked && $div.classList.add('done');
  $checkboxInput.addEventListener('click', toggleCheckbox);

  const $span = document.createElement('span');
  const todoText = document.createTextNode(todo);
  $span.appendChild(todoText);
  $span.classList.add('todo');

  const $small = document.createElement('small');
  const textNode = document.createTextNode(date);
  $small.appendChild(textNode);
  $small.classList.add('date');

  const $editImg = document.createElement('img');
  const $deleteImg = document.createElement('img');
  $editImg.src = 'assets/material-symbols_edit-outline.svg';
  $deleteImg.src = 'assets/material-symbols_delete.svg';

  const $editButton = document.createElement('button');
  $editButton.type = 'button';
  $editButton.classList.add('edit-button');
  $editButton.addEventListener('click', handleClickEdit);
  $editButton.appendChild($editImg);

  const $deleteButton = document.createElement('button');
  $deleteButton.type = 'button';
  $deleteButton.classList.add('delete-button');
  $deleteButton.addEventListener('click', handleClickDelete);
  $deleteButton.appendChild($deleteImg);

  const $buttonDiv = document.createElement('div');
  $buttonDiv.classList.add('button-pair');
  $buttonDiv.appendChild($editButton);
  $buttonDiv.appendChild($deleteButton);

  $div.appendChild($checkboxInput);
  $div.appendChild($span);
  $div.appendChild($small);
  $div.appendChild($buttonDiv);

  $div.addEventListener('mouseover', handleMouseOver);
  $div.addEventListener('mouseleave', handleMouseLeave);

  const $itemList = document.querySelector('.item-list');
  const $todoInput = document.querySelector('.input');
  $itemList.insertBefore($div, $todoInput);
  todos.push(item);
  saveTodo();
};
