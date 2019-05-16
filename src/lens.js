import map from './map';

export function lens(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map(
        function(focus) {
          return setter(focus,target);
        },
        toFunctorFn(getter(target))
      );
    }
  }
}
