import WithUseCallback from "./hooks/useCallback/WithUseCallback";
import DataFetching from "./hooks/useEffect/DataFetching";
import UseEffectCounterOne from "./hooks/useEffect/useEffectCounterOne";
import UseEffectIntervalCounter from "./hooks/useEffect/UseEffectIntervalCounter";
import UseEffectMouse from "./hooks/useEffect/UseEffectMouse";
import UseEffectMouseContainer from "./hooks/useEffect/UseEffectMouseContainer";
import Counter from "./hooks/useMemo/Counter";
import FocusInput from "./hooks/useRef/FocusInput";
import HookTimer from "./hooks/useRef/HookTimer";
import UseStateCounter from "./hooks/useState/UseStateCounter";
import UseStateCounterFour from "./hooks/useState/UseStateCounterFour";
import UseStateCounterThree from "./hooks/useState/UseStateCounterThree";
import UseStateCounterTwo from "./hooks/useState/UseStateCounterTwo";
import Apps from "./hooks/useContext/Apps";

function App() {
  return (
    <div className="App">
      {/* <UseStateCounter /> */}
      {/* <UseStateCounterTwo /> */}
      {/* <UseStateCounterThree /> */}
      {/* <UseStateCounterFour /> */}
      {/* <UseEffectCounterOne /> */}
      {/* <UseEffectMouse /> */}
      {/* <UseEffectMouseContainer /> */}
      {/* <UseEffectIntervalCounter /> */}
      {/* <DataFetching /> */}
      <Apps />
      {/* <WithUseCallback /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
    </div>
  );
}

export default App;
