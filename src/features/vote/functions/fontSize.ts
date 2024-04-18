export const getBubbleNameSize = (value: number) => {
  if (value < 30) return 12;
  else if (value < 50) return 16;
  else return 18;
};

export const getBubbleValueSize = (value: number) => {
  if (value < 30) return 22;
  else if (value < 50) return 30;
  else return 34;
};
