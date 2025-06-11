// Any
const returnValue = (value: any) => value; //

const message = returnValue("Hello World"); // message's type = any
const count = returnValue(5); // count's type = any

// Generic
const returnValue2 = <T>(value: T): T => value;

const message2 = returnValue2<string>("Hello World"); // message's type = string
const count2 = returnValue2<number>(5); // count's type = number

// Multiple Generics
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

// Array
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);
