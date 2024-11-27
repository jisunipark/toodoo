import { createInputItemElement } from './createElement.js';

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
  $itemList.appendChild(createInputItemElement());
});
