import { useContext } from "react";
import { CountContext } from "./Apps";

function ComponentA() {
  const { useCounter } = useContext(CountContext);
  const { dispatch, count } = useCounter;

  return (
    <div>
      Component A {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
