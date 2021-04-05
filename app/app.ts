import { memoizeFn } from "./index";

export class App {
  constructor(public value: number) {
    this.some(value);
  }

  @memoizeFn()
  private some(n: number): number {
    return n + n;
  }
}

const app = (value: number) => new App(value);

app(3); // calculated
app(3); // cached
app(4); // calculated
app(4); // cached
