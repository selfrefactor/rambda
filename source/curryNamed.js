import { equals } from "./equals";
import { length } from "./length";
import { difference } from "./difference";
import { keys } from "./keys";
import { mergeDeepRight } from "./mergeDeepRight";

export const namedCurry = (any_function, array_argument_keys) => {
  if (equals(1, length(arguments)))
    return (array_argument_keys) =>
      namedCurry(any_function, array_argument_keys);
  const partially_apply_named = (object_argument) =>
    equals(void 0, object_argument)
      ? partially_apply_named
      : equals(
          0,
          length(difference(array_argument_keys, keys(object_argument)))
        )
      ? any_function(object_argument)
      : (object_arguments_to_merge) =>
          partially_apply_named(
            mergeDeepRight(object_argument, object_arguments_to_merge)
          );
  return partially_apply_named;
};
