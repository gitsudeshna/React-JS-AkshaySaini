import React, { useEffect, useState } from "react";

export function UserFunctional({ name }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffectCalled");
    // setInterval(() => {
    //   console.log("setInterval called");
    // }, 1000);
    return () => {
      console.log("functional component cleared!!");
    };
  }, [count]);
  return (
    <div>
      <h1>Functinal called {name}</h1>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
