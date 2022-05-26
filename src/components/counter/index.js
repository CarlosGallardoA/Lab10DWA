import { useState } from "react";

const Counter = ({ text1, text2 }) => {
  const [count, setCount] = useState(0);
  const restCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>{text1}</button>
      <button onClick={() => restCount()}>{text2}</button>
    </div>
  );
};

export default Counter;
