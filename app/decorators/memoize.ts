export const memoizeFn = (): any => {
  return (
    target: any,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const fn = descriptor?.value;
    const cache = {};

    descriptor.value = (...args: any[]): any => {
      const argumentTaken = args[0];

      if (argumentTaken in cache) {
        return cache[argumentTaken];
      } else {
        const result = fn(argumentTaken);
        cache[argumentTaken] = result;
        return result;
      }
    };
    return descriptor;
  };
};
