import React from 'react';
import { SvgProps } from 'react-native-svg';
import FullTrustVoteSvg from '../../../assets/icon/fulltrustvote.svg';
import FullDoubtVoteSvg from '../../../assets/icon/fulldoubtvote.svg';
import LittleTrustVoteSvg from '../../../assets/icon/littletrustvote.svg';
import LittleDoubtVoteSvg from '../../../assets/icon/littledoubtvote.svg';

interface RankType {
  icon: React.FC<SvgProps>;
  color: string;
}

const rankMapping: Record<string, RankType> = {
  '매우 신뢰': { icon: FullTrustVoteSvg, color: '#1C64ED' },
  '약간 신뢰': { icon: LittleTrustVoteSvg, color: '#1CD9D3' },
  '매우 의심': { icon: FullDoubtVoteSvg, color: '#9682A3' },
  '약간 의심': { icon: LittleDoubtVoteSvg, color: '#FF75AB' },
};

export function getRankIcon(index: number, status: keyof typeof rankMapping): React.FC<SvgProps> {
  const mapping: RankType = rankMapping[status];
  return mapping.icon;
}

export function getRankColor(index: number, status: keyof typeof rankMapping): string {
  const mapping: RankType = rankMapping[status];
  return mapping.color;
}
