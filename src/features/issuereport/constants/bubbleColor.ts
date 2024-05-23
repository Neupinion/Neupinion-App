export const colorsBubble: string[] = ['#FF75AB', '#1C64ED', '#868BE8', '#9682A3'];

export function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getFillForBubble(index: number, colors: string[]): string {
  if (index >= 0 && index < colors.length) {
    return colors[index];
  } else {
    return colors[4];
  }
}
