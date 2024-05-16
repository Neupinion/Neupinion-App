export function getFormatDate(dateStr: string): string {
  //const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  const monthNum = parseInt(month, 10);
  const dayNum = parseInt(day, 10);

  return `${monthNum}월 ${dayNum}일`;
}

export function formatYMD(dateStr: string): string {
  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  const monthNum = parseInt(month, 10);
  const dayNum = parseInt(day, 10);

  return `${year}년 ${monthNum}월 ${dayNum}일`;
}
