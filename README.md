# TypeScript with React

TypeScript is a superset of JavaScript that allows you to add static type, specifying the type of data being passed.

This doc will mark my learning in TypeScript while trying to use it in a React app.

- **Type Annotation**: when we define a type manually

- **Type Inference**: TS identifies the type for us

## Primitive Types
```
number - let age: **number** = 650

string - const myName: **string** = "Felipe"

boolean - const isOpen: **boolean** = true

any (accepts any type) - let test: **any** = 10
```

### Array with Type
```
number[] - const ids: **number[]** = [1, 2, 3, 4, 5]

string[] - const names: **string[]** = ["Felipe", "Neymar", "Caçarato"]

boolean[] - const bool: **boolean[]** = [true, false, false, true]

```
## Tuples
Defines a structure of elements, where you have to put them in a exact order  
``` 
const person: [string, number] = ["Felipe", 200] // Right
   
const person: [string, number] = [200, "Felipe"] // Wrong
```

### Tuples List
```
const people: [number, string][] = [
   [1, "Felipe"],
   [2, "Caçarato"],
   [3, "Ai Papai"],
]
```

## Type Assertion
Its a way to override TypeScript type inference. Basically telling TypeScript that we know better the type of a variable.
**Syntax**
1. Angle-Bracket syntax (do not work in JSX)
   ```
   const productName: any = "Hat"
   
   let itemId = <string>productName
   ```

3. **as** syntax (better way)
   ```
   const productName: any = "Hat"
   
   let itemId = productName as string
   ```
   
## Intersection
When we want it to be a type or another
```
const productId: string | number | boolean = "1"

const data: string | number = "Neymar"

const numOrBool: number | boolean = true
```

## Enums
It represents a group of constants, basically assigning a value to another value.
Enums will initialize the first value to 0 and add 1 to each additional value
```
enum Direction {
Up = 1,
Down = 2
}

const direction = Direction.Up

console.log(direction) // 1
```

```
enum OrderStatus {
Pending,
Processing,
Sent,
Delivered,
}

let status1 = OrderStatus.Processing
let status2 = OrderStatus.Delivered

console.log(status1) // 1
console.log(status2) // 3
```

```
enum WeekDays {
Monday = 1,
Tuesday = 2,
Wednesday = 3,
Thursday = 4,
Friday = 5,
Saturday = 6,
Sunday = 7,

// How to access values
let day = WeekDays[1]; // Monday
let dayNumber = WeekDays[day] // 1
let diaString = WeekDays["Monday"] // 1

// Listing it with for
for (let day in WeekDays) {
   if(WeekDays.hasOwnProperty(day) && (isNaN(parseInt(day)))) {
      console.log(day)
   }
}

// Result
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday

```

## Object Types
It is a way to create objects that determine its props and its types

```
type User = {
   firstName: string;
   age: number;
   email: string;
   password?: string // ? means optional, making it string | undefined
}

const user: User = {
   firstName: "Neymar",
   age: 33,
   email: "neymarjr@cs2.com"
}
```

We can put type inside a type. Functions aswell
```
type Order = {
   productId: string;
   price: number;
}

type User = {
	firstName: string;
	age: number;
	email: string;
	password?: string
	orders: Order[]; // object type Order array
	register(): string // func
}

const user: User = {
	firstName: "Neymar",
	age: 33,
	email: "neymarjr@cs2.com",
	orders: [{productId: "book", price: 200]},
	register() {
	return "Santos";
}

```

Symbol ? and !  
? - Optional prop  
! - Can't be null or undefined, even tho the prop can accept undefined.  

### Union Type
```
type Author = {
	books: string[];
};

type User = {
	firstName: string;
	age: number;
	email: string;
	password?: string
	orders: Order[]; // object type Order array
	register(): string // func
}

const author: Author & User = {
	age: 2,
	books: ["O Livro"],
	email: "neymarcontato@yahoo.com.br",
	orders: [],
	firstName: "Neymar",
	register() {
	return "Santos FC"
	},
};

```
## Interface
```
interface UserInterface {
	readonly firstName: string; // only read, type doesnt have this functionality
	email: string;
}

const emailUser: UserInterface = {
	email: "neymar@gmail.com",
	firstName: "Neymar",
}

interface AuthorInterface {
	books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
	email: "diretoriasantosfc@gmail.com",
	firstName: "Neymar Pai",
	books: []
}
```

Interfaces are more recommended to define a structure of an object, whilst type is more recommended to define more complex data, ex: user data. Use type for: primitives, unions, intersections, tuples, and even simple object shapes when extension isnt needed

```
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 25 }; // ✅ Right

// Doesnt work with primitives, tuplas and union types
interface Status = "loading" | "success" | "error"; // ❌ Erro: interfaces are object only
interface Coordinates = [number, number]; // ❌ Erro: interfaces dont support tuples
```
## Function
In TypeScript we can type a function, its params and return

```
const sum (x, y) = return x + y
// Simple func that sum two numbers.
```

```
interface MathFunc {
   (x: number, y: number): number
}

const sum: MathFunc = (x, y) => {
   return x + y
}

```

### Void
When func doesnt return nothing, no value, you can specify as **void**

```
const log = (message: string): void => {
  console.log(message)
}

```
