import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case "decrement":
      if (state.firstCounter > 0)
        return {
          ...state,
          firstCounter: state.firstCounter - action.value,
        };
    case "increment2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case "decrement2":
      if (state.secondCounter > 0)
        return {
          ...state,
          secondCounter: state.secondCounter - action.value,
        };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
};

function CounterTwoComplex() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  const handleDispatch = (type, value = 0) => {
    dispatch({ type, value });
  };

  return (
    <div>
      <h1>{counter.firstCounter}</h1>
      <h1>{counter.secondCounter}</h1>
      <button onClick={() => handleDispatch("increment", 1)}>Increment</button>
      <button onClick={() => handleDispatch("decrement", 1)}>Decrement</button>
      <button onClick={() => handleDispatch("increment", 5)}>
        Increment 5
      </button>
      <button onClick={() => handleDispatch("decrement", 5)}>
        Decrement 5
      </button>
      <div>
        <button onClick={() => handleDispatch("increment2", 1)}>
          Increment
        </button>
        <button onClick={() => handleDispatch("decrement2", 1)}>
          Decrement
        </button>
        <button onClick={() => handleDispatch("increment2", 5)}>
          Increment 5
        </button>
        <button onClick={() => handleDispatch("decrement2", 5)}>
          Decrement 5
        </button>
      </div>
      <button onClick={() => handleDispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterTwoComplex;
