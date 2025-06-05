interface UserInterface {
  readonly firstName: string; // only read, type doesnt have this functionality
  email: string;
}

const emailUser: UserInterface = {
  email: "neymar@gmail.com",
  firstName: "Neymar",
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "diretoriasantosfc@gmail.com",
  firstName: "Neymar Pai",
  books: [],
};

interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 25 }; // ✅ Right

// Doesnt work with primitives, tuplas and union types
// interface Status = "loading" | "success" | "error"; // ❌ Erro: interfaces are object only
// interface Coordinates = [number, number]; // ❌ Erro: interfaces dont support tuples
