// Object Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[]; // object type Order array
  register(): string; // func
};

const user: User = {
  firstName: "Neymar",
  age: 33,
  email: "neymarjr@cs2.com",
  orders: [{ productId: "book", price: 200 }],
  register() {
    return "Santos";
  },
};

type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["O Livro"],
  email: "neymarcontato@yahoo.com.br",
  orders: [],
  firstName: "Neymar",
  register() {
    return "Santos FC";
  },
};
