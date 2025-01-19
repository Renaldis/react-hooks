import { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  const isOdd = useMemo(() => {
    return counterTwo % 2 === 1;
  }, [counterTwo]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? " Even" : " Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        <span>{isOdd ? " Odd" : " Even"}</span>
      </div>
    </div>
  );
}

export default Counter;
