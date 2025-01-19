import { useState } from "react";

export default function UseStateCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Hook Counter : {counter}
      </button>
    </div>
  );
}
