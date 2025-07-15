export function add(input: string): number {
  if (input.trim() === "") return 0;
  const parts = input.split(",");
  return Number(parts[0]);
}
