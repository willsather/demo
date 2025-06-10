/**
 * Utility function to wait for a specified number of seconds
 * @param seconds - The number of seconds to wait
 * @returns A promise that resolves after the specified time
 */
export const wait = (seconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
