export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

  // '년', '월', '일' 문자와 사이의 공백을 고려하여 제거하고, 필요한 위치에 '.' 추가
  // \s*는 0개 이상의 공백 문자를 의미함
  return formattedDate.replace(/(\d{4})년\s*(\d{2})월\s*(\d{2})일/, '$1.$2.$3');
};
