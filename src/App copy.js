import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        <button onClick={() => (step > 1 ? setStep((d) => d - 1) : step)}>
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((d) => d + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((d) => d - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((d) => d + step)}>+</button>
      </div>
      <div className="date">
        <span>
          {count === 0
            ? "Today is "
            : count === 1
            ? `${count} day from today is `
            : count === -1
            ? `${Math.abs(count)} day ago was `
            : count > 1
            ? `${count} days from today is `
            : count < -1
            ? `${Math.abs(count)} days ago was `
            : ""}
        </span>

        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
