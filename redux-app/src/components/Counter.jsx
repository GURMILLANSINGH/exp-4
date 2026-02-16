import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Redux Counter</h2>
      <h1 className="count">{count}</h1>
      <div className="buttons">
        <button className="plus" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="minus" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
