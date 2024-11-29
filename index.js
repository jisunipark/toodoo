import { createInputItemElement, createTodoItemElement } from './createElement.js';
import { getFormattedDate } from './util.js';

if (!localStorage.length) localStorage.setItem('todos', '[]');

const $items = document.querySelectorAll('.item');

[...$items].forEach(($item) => {
  const $input = $item.firstElementChild;

  // input에서 체크 표시가 된 아이템에는 done 클래스를 추가
  $input.addEventListener('click', () => {
    $item.classList.toggle('done');
  });

  // 아이템에 마우스 호버 시 편집/삭제 아이콘 나타나도록
  $item.addEventListener('mouseover', () => {
    $item.classList.add('hover');
  });

  $item.addEventListener('mouseleave', () => {
    $item.classList.remove('hover');
  });
});

// 아이템 추가 버튼 클릭 시 입력창 아이템 요소가 추가되도록
const $addButton = document.getElementById('add-button');
const $itemList = document.querySelector('.item-list');

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

    console.log(getFormattedDate(new Date()));
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newItem);
    localStorage.setItem('todos', JSON.stringify(todos));

    const $todoInputItem = document.querySelector('.input');
    $itemList.insertBefore(createTodoItemElement(e.target.value), $todoInputItem);
    e.target.value = '';
  }
};

// esc 누르면 입력창 사라짐
export const closeInputItem = (e) => {
  if (e.key === 'Escape') {
    $itemList.removeChild(document.querySelector('.input'));
  }
};
