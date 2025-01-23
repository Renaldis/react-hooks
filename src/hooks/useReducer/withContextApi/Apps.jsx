import { createContext, useReducer } from "react";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";

export const CountContext = createContext();

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

function Apps() {
  const [count, dispatch] = useReducer(reducer, initialCounter);

  const useCounter = {
    count,
    dispatch,
  };
  return (
    <div>
      Count - {count}
      <CountContext.Provider value={{ useCounter }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default Apps;
