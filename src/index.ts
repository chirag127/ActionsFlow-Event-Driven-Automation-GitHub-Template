// src/index.ts

/**
 * A simple function to demonstrate TypeScript functionality.
 * @param name - The name to greet.
 * @returns A greeting message.
 */
export function greet(name: string): string {
  if (!name) {
    throw new Error('Name is a required parameter.');
  }
  return `Hello, ${name}!`;
}

/**
 * An example of an async function.
 * @returns A promise that resolves to a success message.
 */
export async function performAsyncOperation(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async operation complete.');
    }, 1000);
  });
}
