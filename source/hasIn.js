import { propFn } from "./prop";

export function hasIn(searchProperty, obj) {
  if (arguments.length === 1){
    return (_obj) => hasIn(searchProperty, _obj);
  }

  return propFn(searchProperty, obj) !== undefined
}