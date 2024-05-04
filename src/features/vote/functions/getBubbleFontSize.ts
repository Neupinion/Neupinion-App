export const getBubbleNameSize = (value: number) => {
  if (value < 20) return 0;
  if (value < 50) return 12;
  else if (value < 70) return 14;
  else return 15;
};

export const getBubbleValueSize = (value: number) => {
  if (value < 20) return 0;
  else if (value < 50) return 17;
  else if (value < 70) return 30;
  else return 34;
};
