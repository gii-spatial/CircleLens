/**
 * Utility function to pause the execution
 * for a specified duration
 *
 * @param {number} ms - The number of milliseconds to wait before the promise resolves.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const CommonUtil = Object.freeze({
  sleep,
});

export default CommonUtil;
