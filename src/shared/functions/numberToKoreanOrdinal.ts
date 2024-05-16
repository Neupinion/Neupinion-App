export function numberToKoreanOrdinal(num: number) {
  const units = ['', '한', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉'];
  const tens = ['', '열', '스물', '서른', '마흔', '쉰', '예순', '일흔', '여든', '아흔'];
  const suffix = ' 번째';

  if (num === 100) {
    return '백 번째';
  }

  if (num == 1) {
    return '첫 번째';
  }

  const tenPart = Math.floor(num / 10);
  const unitPart = num % 10;

  let koreanNumber = '';

  if (tenPart > 0) {
    koreanNumber += tens[tenPart];
  }
  if (unitPart > 0) {
    koreanNumber += units[unitPart];
  }

  return koreanNumber + suffix;
}
