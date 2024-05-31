import theme from '../../../shared/styles/theme';

interface ColorType {
  gradient: string;
  color: string;
}

const colorMapping: Record<string, ColorType> = {
  '매우 신뢰': { gradient: 'url(#FullTrust)', color: theme.trustColor.fullyTrust },
  '약간 신뢰': { gradient: 'url(#LittleTrust)', color: theme.trustColor.littleTrust },
  '매우 의심': { gradient: 'url(#FullDoubt)', color: theme.trustColor.fullyDoubt },
  '약간 의심': { gradient: 'url(#LittleDoubt)', color: theme.trustColor.littleDoubt },
};

export function getFillForBubble(index: number, status: keyof typeof colorMapping): string {
  const mapping: ColorType = colorMapping[status];
  return index < 2 ? mapping.gradient : mapping.color;
}
