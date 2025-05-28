import "./App.css";

function App() {
  // Type Annotation
  let numberAnnotation: number = 5;

  // Type Inference
  let numberInference = 5;

  // Primitive types
  const age: number = 5;

  const name: string = "Felipe";

  const isOpen: boolean = true;

  // Type Array
  const ids: number[] = [1, 2, 3, 4, 5];

  const names: string[] = ["Felipe", "Neymar", "Caçarato"];

  const bool: boolean[] = [true, false, false, true];

  // Tuples
  const person: [number, string] = [200, "Felipe"];
  // const person2: [number, string] = ["Oi", 100]

  return <div></div>;
}

export default App;
