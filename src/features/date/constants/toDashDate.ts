export const toDashDate = (date: string): string => {
  if (date.length !== 8) {
    throw new Error('Invalid date format. Expected format YYYYMMDD.');
  }

  // 날짜 문자열을 구성하는 년, 월, 일 부분을 추출합니다.
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);

  // 추출한 년, 월, 일을 'YYYY-MM-DD' 형식으로 반환합니다.
  return `${year}-${month}-${day}`;
};
