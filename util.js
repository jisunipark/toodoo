// 매개변수로 받은 Date 객체를 'yy/mm/dd' 형식의 문자열로 변환하여 반환하는 함수
export const getFormattedDate = (date) => {
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${yy}/${mm}/${dd}`;
};
