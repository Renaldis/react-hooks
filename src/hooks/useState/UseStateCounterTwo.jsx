import { useState } from "react";

export default function UseStateCounterTwo() {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);

  function incrementFive() {
    for (let x = 0; x < 5; x++) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }
  //   function incrementFive() {
  //     for (let x = 0; x < 5; x++) {
  //       setCounter(counter + 1);
  //     }
  //   }
  // menggunakan counter+1 kurang efektif, karena counter tidak mengambil nilai secara realtime, sehingga nilai counter nya static, dengan menggunakan prevCounter => prevCounter. ini akan mengambil data sebelumnya secara real time

  return (
    <div>
      Count: {counter}
      <button onClick={() => setCounter(initialCount)}>Reset</button>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}
