import { $itemList } from './index.js';
import {
  handleMouseOver,
  handleMouseLeave,
  handleEnterAdd,
  handleCloseInput,
  handleToggleCheckbox,
  handleClickEditIcon,
  handleClickDeleteIcon,
} from './handle.js';

export const paintTodoInput = () => {
  const $emptyMsg = document.querySelector('.empty-msg');
  $emptyMsg.style.display = 'none';

  const $div = document.createElement('div');
  $div.classList.add('item', 'input');

  const $checkboxInput = document.createElement('input');
  $checkboxInput.type = 'checkbox';

  const $todoInput = document.createElement('input');
  $todoInput.type = 'text';
  $todoInput.classList.add('todo-input');
  $todoInput.addEventListener('keydown', handleEnterAdd);
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

  $itemList.appendChild($div);
};

export const paintTodo = (item) => {
  const { id, checked, todo, date } = item;

  const $div = document.createElement('div');
  $div.classList.add('item');
  $div.id = id;

  const $checkboxInput = document.createElement('input');
  $checkboxInput.type = 'checkbox';
  $checkboxInput.checked = checked;
  checked && $div.classList.add('done');
  $checkboxInput.addEventListener('click', handleToggleCheckbox);

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
  $editButton.addEventListener('click', handleClickEditIcon);
  $editButton.appendChild($editImg);

  const $deleteButton = document.createElement('button');
  $deleteButton.type = 'button';
  $deleteButton.classList.add('delete-button');
  $deleteButton.addEventListener('click', handleClickDeleteIcon);
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

  const $todoInput = document.querySelector('.input');
  $itemList.insertBefore($div, $todoInput);
};
