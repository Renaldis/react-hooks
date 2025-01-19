import WithUseCallback from "./hooks/useCallback/WithUseCallback";
import UseEffectCounterOne from "./hooks/useEffect/useEffectCounterOne";
import UseEffectMouse from "./hooks/useEffect/UseEffectMouse";
import UseEffectMouseContainer from "./hooks/useEffect/UseEffectMouseContainer";
import Counter from "./hooks/useMemo/Counter";
import FocusInput from "./hooks/useRef/FocusInput";
import HookTimer from "./hooks/useRef/HookTimer";
import UseStateCounter from "./hooks/useState/UseStateCounter";
import UseStateCounterFour from "./hooks/useState/UseStateCounterFour";
import UseStateCounterThree from "./hooks/useState/UseStateCounterThree";
import UseStateCounterTwo from "./hooks/useState/UseStateCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <UseStateCounter /> */}
      {/* <UseStateCounterTwo /> */}
      {/* <UseStateCounterThree /> */}
      {/* <UseStateCounterFour /> */}
      {/* <UseEffectCounterOne /> */}
      {/* <UseEffectMouse /> */}
      <UseEffectMouseContainer />
      {/* <WithUseCallback /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
    </div>
  );
}

export default App;
