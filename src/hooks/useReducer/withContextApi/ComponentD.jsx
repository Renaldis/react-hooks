import { useContext } from "react";
import { CountContext } from "./Apps";

function ComponentD() {
  const { useCounter } = useContext(CountContext);
  const { dispatch, count } = useCounter;

  return (
    <div>
      Component D {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentD;
