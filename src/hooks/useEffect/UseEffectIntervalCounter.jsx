import { useEffect, useState } from "react";

export default function UseEffectIntervalCounter() {
  const [count, setCounter] = useState(0);

  const tick = () => {
    setCounter(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div>{count}</div>;
}
