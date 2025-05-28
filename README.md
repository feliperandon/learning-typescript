# TypeScript with React

TypeScript is a superset of JavaScript that allows you to add static type, specifying the type of data being passed.

This doc will mark my learning in TypeScript while trying to use it in a React app.

- **Type Annotation**: when we define a type manually

- **Type Inference**: TS identifies the type for us

## Primitive Types

- number - let age: **number** = 650
- string - const myName: **string** = "Felipe"
- boolean - const isOpen: **boolean** = true
- any (accepts any type) - let test: **any** = 10

### Array with Type
- number[] - const ids: **number[]** = [1, 2, 3, 4, 5]
- string[] - const names: **string[]** = ["Felipe", "Neymar", "Caçarato"]
- boolean[] - const bool: **booleans[]** = [true, false, false, true]


## Tuples
Defines a structure of elements, where you have to put them in a exact order
- const person: [string, number] = ["Felipe", 200] // Right
- const person: [string, number] = [200, "Felipe"] // Wrong

## Tuples List
const people: [number, string][] = [
[1, "Felipe"],
[2, "Caçarato"],
[3, "Ai Papai"],
]
