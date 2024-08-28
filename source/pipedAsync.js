import { pipeAsync } from "./pipeAsync.js";

export function pipedAsync(input, ...fnList) {
  return pipeAsync(...fnList)(input)
}
