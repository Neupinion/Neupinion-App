const colors: string[] = ['#FF75AB', '#1C64ED', '#868BE8', '#9682A3', '#E6E2FD'];

export function getFillForBubble(index: number): string {
  if (index >= 0 && index < colors.length) {
    return colors[index];
  } else {
    return colors[4];
  }
}
