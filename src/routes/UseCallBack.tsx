import { useCallback, useEffect, useState } from "react";
import Layout from "../Layout";

function Children({ getItems }: { getItems: () => number[] }) {
  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    setItems(getItems());
  }, [getItems]);
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default function UseCallBack() {
  const [number, setNumber] = useState<number>(1);
  const [toggle, setToggle] = useState(false);
  const getItemsUseCallBack = useCallback(() => {
    console.log("this using useCallback so will only render once");
    return [number, number + 1, number + 2];
  }, [number]);
  // this is the old method, if we use this, it will console.log everytime when we toggle
  //because the UseCallBackPage re-render everytime when toggle and it render the function again
  const getItems = (): number[] => {
    //you can see the console showed twice when changing the input
    console.log("this only show when the input is onChange");
    return [number, number + 1, number + 2];
  };
  return (
    <Layout>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <br />
        {toggle.toString()}
        <br />
        <label>enter your number for items below:</label>
        <input
          className="border-4"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setNumber(1);
            } else {
              setNumber(parseInt(value));
            }
          }}
        />
        {/* <Children getItems={getItems} /> */}
        <Children getItems={getItemsUseCallBack} />
      </div>
    </Layout>
  );
}
