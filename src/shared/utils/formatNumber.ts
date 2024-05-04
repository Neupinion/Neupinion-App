export function formatNumber(
  number: number,
  locale: string = 'ko-KR',
  options?: Intl.NumberFormatOptions,
): string {
  return number.toLocaleString(locale, options);
}
