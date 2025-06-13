## Typing useState

useState's type is already explicit, unless you use "null", complex objects, empty array and uniom type

```
const [name, setName] = useState<string>("");
```

```
type User = {
  name: string;
  age: number;
};


const [user, setUser] = useState<User | null>(null);

const handleUpdate = () => {
    setUser({ name: "Felipe", age: 50 });
  };

 {user && (
          <p>
            {user?.name} - {user?.age} years old
          </p>
        )}

```
