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

// 입력창 아이템 요소를 생성하여 반환하는 함수
const createInputItem = () => {
  const $div = document.createElement('div');
  $div.classList.add('item', 'input');

  const $checkboxInput = document.createElement('input');
  $checkboxInput.type = 'checkbox';

  const $todoInput = document.createElement('input');
  $todoInput.type = 'text';
  $todoInput.classList.add('todo-input');

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

const $addButton = document.getElementById('add-button');
const $itemList = document.querySelector('.item-list');

$addButton.addEventListener('click', () => {
  $itemList.appendChild(createInputItem());
});
