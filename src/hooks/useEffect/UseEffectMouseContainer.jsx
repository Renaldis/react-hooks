import { useState } from "react";
import UseEffectMouse from "./UseEffectMouse";

export default function UseEffectMouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UseEffectMouse />}
    </div>
  );
}
