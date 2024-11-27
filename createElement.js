import { addTodoItem } from './index.js';

// 입력창 아이템 요소를 생성하여 반환하는 함수
export const createInputItemElement = () => {
  const $div = document.createElement('div');
  $div.classList.add('item', 'input');

  const $checkboxInput = document.createElement('input');
  $checkboxInput.type = 'checkbox';

  const $todoInput = document.createElement('input');
  $todoInput.type = 'text';
  $todoInput.classList.add('todo-input');
  $todoInput.addEventListener('keydown', addTodoItem);

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

// 투두 아이템 요소를 생성하여 반환하는 함수
export const createTodoItemElement = (todo) => {
  const $div = document.createElement('div');
  $div.classList.add('item');

  const $checkboxInput = document.createElement('input');
  $checkboxInput.type = 'checkbox';

  const $span = document.createElement('span');
  const todoText = document.createTextNode(todo);
  $span.appendChild(todoText);
  $span.classList.add('todo');

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
  $div.appendChild($span);
  $div.appendChild($small);
  $div.appendChild($buttonDiv);

  return $div;
};
