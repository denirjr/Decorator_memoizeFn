import { Memoize } from "memoizefn-decorator-ts";

export class App {
  constructor() {
    console.log(this.some(3)); // calculated
    console.log(this.some(3)); // cached
    console.log(this.some(4)); // calculated
    console.log(this.some(4)); // cached
  }

  @Memoize()
  private some(n: number): number {
    return n + n;
  }
}

new App();