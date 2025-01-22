import { createContext } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();

export default function Apps() {
  const user = "Renaldi";
  const role = "Rrogrammer";

  const person = {
    user,
    role,
  };

  return (
    <userContext.Provider value={person}>
      <ComponentB />
    </userContext.Provider>
  );
}
