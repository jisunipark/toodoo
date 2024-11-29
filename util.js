// 매개변수로 받은 Date 객체를 'yy/mm/dd' 형식의 문자열로 변환하여 반환하는 함수
export const getFormattedDate = (date) => {
  return date
    .toLocaleDateString('ko-KR', {
      dateStyle: 'short',
    })
    .replaceAll('. ', '/')
    .replace('.', '');
};
