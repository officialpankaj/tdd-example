export function add(input: string): number {
  if (input.trim() === "") return 0;

  let delimiter = /,|\n/;
  let numbers = input;

  if (input.startsWith("//")) {
    const match = input.match(/^\/\/(.+)\n(.*)$/);
    if (match) {
      delimiter = new RegExp(match[1]);
      numbers = match[2];
    }
  }

  const parts = numbers.split(delimiter).map(Number);
  const negatives = parts.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return parts.reduce((sum, n) => sum + n, 0);
}
