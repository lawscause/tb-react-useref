import { useRef } from "react";

function App() {
  const inputElement = useRef(0);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
    <br/>
    <br/>
    <br/>
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      </div>
      <br/>
      <div><input type="text" id="tbSecond"></input></div>
      
    </>
  );
}

export default App;
