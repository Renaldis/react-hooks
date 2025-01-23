import { useReducer } from "react";

const initialCounter = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state > 0) return state - 1;
    case "reset":
      return initialCounter;
    default:
      throw new Error();
  }
};

function CounterThreeMultiple() {
  const [counter1, dispatch1] = useReducer(reducer, initialCounter);
  const [counter2, dispatch2] = useReducer(reducer, initialCounter);

  return (
    <div>
      <div>
        <h1>Counter 1: {counter1}</h1>
        <button onClick={() => dispatch1("increment")}>Increment</button>
        <button onClick={() => dispatch1("decrement")}>Decrement</button>
        <button onClick={() => dispatch1("reset")}>Reset</button>
      </div>
      <hr />
      <div>
        <h1>Counter 2: {counter2}</h1>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThreeMultiple;
