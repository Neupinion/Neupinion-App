interface ColorType {
  gradient: string;
  color: string;
}

const colorMapping: Record<string, ColorType> = {
  '매우 신뢰': { gradient: 'url(#FullTrust)', color: '#1C64ED' },
  '약간 신뢰': { gradient: 'url(#LittleTrust)', color: '#1CD9D3' },
  '매우 의심': { gradient: 'url(#FullDoubt)', color: '#9682A3' },
  '약간 의심': { gradient: 'url(#LittleDoubt)', color: '#FF75AB' },
};

export function getFillForBubble(index: number, status: keyof typeof colorMapping): string {
  const mapping: ColorType = colorMapping[status];
  return index < 2 ? mapping.gradient : mapping.color;
}
