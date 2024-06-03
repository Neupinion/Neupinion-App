export const getBubbleNameSize = (value: number) => {
  if (value < 20) return 14;
  if (value < 50) return 17;
  else if (value < 70) return 20;
  else return 14;
};
