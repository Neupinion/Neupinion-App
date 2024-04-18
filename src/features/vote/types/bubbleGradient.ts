export interface BubbleGradient {
  id: string;
  cx: string;
  cy: string;
  r: string;
  stop1: GradientStop;
  stop2: GradientStop;
}

interface GradientStop {
  offset: string;
  stopColor: string;
}

export interface DataTypeDummy {
  name: string;
  value: number;
  children?: DataTypeDummy[];
}
