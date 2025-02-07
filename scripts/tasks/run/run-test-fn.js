import { exec, TEST_BIN, OUTPUT_TEST_FILE } from '../constants.js';
import { readFileSync } from 'node:fs';

async function runTestWithFile(filePath) {
  const label = `${filePath} - test`;
  const command = `node ${TEST_BIN} -u run ${filePath} > ${OUTPUT_TEST_FILE}`;
  console.time(label);
  console.log(command);
  const { errorMessage, success } = await exec(command);
  if (success) {
    const output = readFileSync(OUTPUT_TEST_FILE, 'utf8');
    if (!output) {
      console.log('TEST: OK');
    } else {
      console.log(output);
    }
  } else {
    console.log('TEST: ERROR', errorMessage);
  }
  console.timeEnd(label);
}

export async function runTestFn(filePath) {
  await runTestWithFile(filePath);
}