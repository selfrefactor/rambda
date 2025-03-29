import { argv, exit } from 'process';
import { runTestFn } from './run-test-fn.js';

const filePath = argv[2];

(async function runVitest() {
  if (!filePath) {
    console.log('Please provide a file path');
    exit(1);
  }
  await runTestFn(filePath);
})();
