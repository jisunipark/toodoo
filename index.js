const $items = document.querySelectorAll('.item');

[...$items].forEach(($item) => {
  const $input = $item.firstElementChild;

  console.log($item.lastElementChild);

  // input에서 체크 표시가 된 아이템에는 done 클래스를 추가
  $input.addEventListener('click', () => {
    $item.classList.toggle('done');
  });
});
