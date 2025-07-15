import { describe, it, expect } from 'vitest';
import { add } from './StringCalculator';

describe('StringCalculator', () => {
  it('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });
});