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
// import Apps from "./hooks/useContext/Apps";
import Wschool from "./hooks/useReducer/wschool";
import CounterOneSimpleState from "./hooks/useReducer/CounterOneSimpleState";
import CounterTwoComplex from "./hooks/useReducer/CounterTwoComplex";
import CounterThreeMultiple from "./hooks/useReducer/CounterThreeMultipleUseReducer";
import Apps from "./hooks/useReducer/withContextApi/Apps";

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
      {/* <Apps /> */}
      {/* <Wschool /> */}
      {/* {<CounterOneSimpleState />} */}
      {/* {<CounterTwoComplex />} */}
      {/* <CounterThreeMultiple /> */}
      <Apps />
      {/* <WithUseCallback /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
    </div>
  );
}

export default App;
