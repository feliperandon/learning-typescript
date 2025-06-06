// 1nd example
interface MathFunc {
  (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

const sumType: MathFunc = (x, y) => {
  return x + y;
};

// 2nd example
const sum2 = (x: number, y: number): string => {
  return (x + y).toString();
};

// 3nd example
const sum3 = (x: number, y: number): number | string => {
  return (x + y).toString();
};

// VOID
const log = (message: string): void => {
  console.log(message);
};

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

////////////////////////////////////////
