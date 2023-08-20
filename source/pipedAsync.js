import { pipeAsync } from "./pipeAsync";

export function pipedAsync(input, ...fnList) {
  return pipeAsync(...fnList)(input)
}
