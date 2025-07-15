export function add(input: string): number {
  if (input.trim() === '') return 0;

  const parts = input.split(/,|\n/).map(Number);
  return parts.reduce((sum, n) => sum + n, 0);
}