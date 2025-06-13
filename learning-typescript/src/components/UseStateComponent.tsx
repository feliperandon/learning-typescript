import { useEffect, useState } from "react";

// 2nd Example
type User = {
  name: string;
  age: number;
};

// 3nd Example
type Product = {
  id: number;
  name: string;
};

const useStateComponent = () => {
  // 1nd Example
  const [name, setName] = useState<string>("");

  // 2nd Example
  const [user, setUser] = useState<User | null>(null);

  const handleUpdate = () => {
    setUser({ name: "Felipe", age: 50 });
  };

  // 3nd Example
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProduct({ id: 1, name: "Mouse" });
      setLoading(false);
    }, 1000);
  }, [product]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <h2>First Example - Basic</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <p>Hello, {name}</p>
      </div>
      <div>
        <h2>Second Example - Object</h2>
        {user && (
          <p>
            {user?.name} - {user?.age} years old
          </p>
        )}
        <button onClick={handleUpdate}>Update User</button>
      </div>
      <div>
        <h2>Third Example</h2>
        <p>{product?.name}</p>
      </div>
    </>
  );
};

export default useStateComponent;
