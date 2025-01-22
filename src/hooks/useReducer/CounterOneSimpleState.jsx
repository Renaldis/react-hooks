import { useReducer } from "react";

const initialCounter = 0;
const reducer = (state, action) => {
  switch (action.type) {
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

export default function CounterOneSimpleState() {
  const [counter, dispatch] = useReducer(reducer, initialCounter);

  const handleCounter = (e) => {
    const { name } = e.target;
    dispatch({
      type: name,
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter} name="increment">
        Increment
      </button>
      <button onClick={handleCounter} name="decrement">
        Decrement
      </button>
      <button onClick={handleCounter} name="reset">
        Reset
      </button>
    </div>
  );
}
