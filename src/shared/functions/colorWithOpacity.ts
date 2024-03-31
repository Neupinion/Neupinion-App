export function colorWithOpacity(color: string, opacity: number): string {
  const [r, g, b] = color.match(/\w\w/g)!.map((hex) => parseInt(hex, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
