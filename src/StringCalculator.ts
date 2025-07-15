export function add(input: string): number {
  if (input.trim() === '') return 0;

  let delimiter = /,|\n/;
  let numbers = input;

  if (input.startsWith('//')) {
    const match = input.match(/^\/\/(.+)\n(.*)$/);
    if (match) {
      delimiter = new RegExp(match[1]);
      numbers = match[2];
    }
  }

  const parts = numbers.split(delimiter).map(Number);
  return parts.reduce((sum, n) => sum + n, 0);
}