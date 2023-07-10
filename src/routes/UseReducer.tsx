import { useReducer } from "react";
import Layout from "../Layout";

const DefaultAge = 100;

function reducer(state: any, action: any) {
  if (action.type === "increment") {
    return { age: state.age + 1 };
  }
  if (action.type === "decrement") {
    return { age: state.age - 1 };
  }
  if (action.type === "reset") {
    return { age: DefaultAge };
  }
  throw new Error("no such type of action");
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { age: DefaultAge });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <Layout>
      <div className="container">
        <h1>UseReducer Demo Page</h1>
        <div>
          {state.age.toString()}
          <button onClick={handleDecrement} className="m-4 p-4 border-4">
            -
          </button>
          <button onClick={handleIncrement} className="m-4 p-4 border-4">
            +
          </button>
          <button onClick={handleReset} className="m-4 p-4 border-4">
            reset
          </button>
        </div>
      </div>
    </Layout>
  );
}
