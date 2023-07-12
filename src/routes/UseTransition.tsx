import { useState, useTransition } from "react";
import Layout from "../Layout";

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(false);
  const changeState = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({}), 10000);
    });
  };
  const handleClick = () => {
    startTransition(() => {
      changeState().then(() => setValue(!value));
    });
  };

  return (
    <Layout>
      <div className="container">
        <h1>Use Transition Hook demo page</h1>
        {isPending && <h1>🌀 Loading...</h1>}
        {value.toString()}

        <button onClick={handleClick} className="m-4 p-4 border-4">
          toggle
        </button>
      </div>
    </Layout>
  );
}
