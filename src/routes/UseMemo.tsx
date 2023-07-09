import { useMemo, useState } from "react";
import Layout from "../Layout";

export default function UseMemo() {
  const [toggle, setToggle] = useState(false);
  const [number, setNumber] = useState(1);
  //everytime we toggle will trigger this function re-render
  //   const doubleNumber = slowFunction(number);

  //we used useMemo so the slowFunction won't trigger if the number haven't changed
  //try it to comment out this and use the old doubleNumber value to display and see the result
  const doubleNumberUseMemo = useMemo(() => slowFunction(number), [number]);

  return (
    <Layout>
      <div className="container">
        {toggle.toString()}
        <br />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <div>
          <label>enter your number: </label>
          <input
            className=""
            onChange={(e) => setNumber(parseInt(e.target.value))}
            type="number"
          />
          {doubleNumberUseMemo}
          {/* {doubleNumber} */}
        </div>
      </div>
    </Layout>
  );
}
const slowFunction = (value: number): number => {
  console.log("called slow function");
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
  return value * 2;
};
