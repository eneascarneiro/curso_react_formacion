import React, { useState }  from "react";


export default function MyCustomeField() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);
  const [count2, setCountDouble] = useState(1);
  const [count3, setCountHalf] = useState(count2);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {count2} times</p>
      <p>You clicked {count3} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCountDouble(count2 *2)}>
        Click me
      </button>
      <button onClick={() => setCountHalf(count2 /count)}>
        Click me
      </button>
    </div>
  );
  }