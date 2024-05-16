import { numberToKoreanOrdinal } from './numberToKoreanOrdinal';

export function getNewsReportOrdinalInKorean(num: number): string {
  if (num == 1) return '첫 보도';
  else return numberToKoreanOrdinal(num) + '보도';
}
