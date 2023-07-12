import { useState } from "react";
import Layout from "../Layout";

export default function UseStatePage() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <Layout>
      <div className="container m-4" data-testid="container">
        <h1>UseState demo Page</h1>
        <div className="flex justify-around">
          <button data-testid="minus-btn" onClick={decrement}>
            -
          </button>
          <span data-testid="label-value">{value}</span>
          <button data-testid="plus-btn" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </Layout>
  );
}
