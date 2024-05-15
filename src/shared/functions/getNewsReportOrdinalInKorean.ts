export function getNewsReportOrdinalInKorean(num: number): string {
  switch (num) {
    case 1:
      return '첫 보도';
    case 2:
      return '두 번째 보도';
    case 3:
      return '세 번째 보도';
    case 4:
      return '네 번째 보도';
    case 5:
      return '다섯 번째 보도';
    default:
      return '해당 사항 없음';
  }
}
