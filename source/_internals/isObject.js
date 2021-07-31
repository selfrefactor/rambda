import { type } from "../type";

export function _isObject (input){
  return type(input) === "Object"
}
