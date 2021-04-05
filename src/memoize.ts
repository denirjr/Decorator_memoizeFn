export const memoize = (): any => {
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
        console.log("Fetching from cache", argumentTaken);
        return cache[argumentTaken];
      } else {
        console.log("Calculating result", argumentTaken);
        const result = fn(argumentTaken);
        cache[argumentTaken] = result;
        return result;
      }
    };
    return descriptor;
  };
};
