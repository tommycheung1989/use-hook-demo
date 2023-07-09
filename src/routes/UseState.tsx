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
      <div className="container m-4">
        <h1>UseState demo Page</h1>
        <div className="flex justify-around">
          <button onClick={decrement}>-</button>
          <input className="text-center" type="text" value={value} />
          <button onClick={increment}>+</button>
        </div>
      </div>
    </Layout>
  );
}
