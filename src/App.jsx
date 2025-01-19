import WithUseCallback from "./hooks/useCallback/WithUseCallback";
import Counter from "./hooks/useMemo/Counter";
import FocusInput from "./hooks/useRef/FocusInput";
import HookTimer from "./hooks/useRef/HookTimer";

function App() {
  return (
    <div className="App">
      {/* <WithUseCallback /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      <HookTimer />
    </div>
  );
}

export default App;
