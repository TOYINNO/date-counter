import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementDate, decrementDate } from "./dateSlice";
import "./App.css";

function App() {
  const currentDate = useSelector((state) => state.date.currentDate);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Date Counter </h1>
      <div>
        <button onClick={() => dispatch(decrementDate())}>-</button>
        <span>{currentDate.toDateString()}</span>
        <button onClick={() => dispatch(incrementDate())}>+</button>
      </div>
    </div>
  );
}

export default App;
