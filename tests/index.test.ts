// tests/index.test.ts
import { describe, it, expect } from 'vitest';
import { greet, performAsyncOperation } from '../src/index';

describe('greet function', () => {
  it('should return a greeting message for a valid name', () => {
    const result = greet('Jules');
    expect(result).toBe('Hello, Jules!');
  });

  it('should throw an error if the name is not provided', () => {
    expect(() => greet('')).toThrow('Name is a required parameter.');
  });
});

describe('performAsyncOperation function', () => {
  it('should resolve with a success message', async () => {
    const result = await performAsyncOperation();
    expect(result).toBe('Async operation complete.');
  });
});
