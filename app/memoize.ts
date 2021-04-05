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
        console.log('GET CACHE');
        return cache[argumentTaken];
      } else {
        console.log('NO CACHE');
        const result = fn(argumentTaken);
        cache[argumentTaken] = result;
        return result;
      }
    };
    return descriptor;
  };
};
