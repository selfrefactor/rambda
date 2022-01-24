import { createPath } from "./_internals/createPath";

export function deletePath(pathInput, obj) {
  if (arguments.length === 1){
    return (_obj) => deletePath(pathInput, _obj);
  }

  const paths = createPath(pathInput)

  if (index + 1 >= paths.length) {
    return delete object[paths[index]]
  }

  return deletePath(object[paths[index]], paths, ++index)
}
