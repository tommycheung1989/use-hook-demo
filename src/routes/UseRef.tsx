import { useEffect, useRef, useState } from "react";
import Layout from "../Layout";

export default function UseRef() {
  //useState will trigger re-render everytime, so the value will update everytime
  const [value, setValue] = useState(0);
  //useRef won't trigger re-render, the value2 won't update when click
  //it only show the update when the page re-render
  const value2 = useRef(0);

  const [render, setRender] = useState(false);
  const handleClick = () => {
    value2.current = value2.current + 1;
  };
  useEffect(() => {}, [render]);
  return (
    <Layout>
      <div className="container">
        <div>{`useState value ` + value.toString()}</div>
        <div>{`useRef value ` + value2.current.toString()}</div>
        <div>
          <button
            className="m-4 border-4 p-4"
            onClick={() => setValue(value + 1)}
          >
            useStateButton
          </button>
          <button className="m-4 p-4 border-4" onClick={handleClick}>
            useRefButton
          </button>
          <button
            className="m-4 p-4 border-4"
            onClick={() => setRender(!render)}
          >
            re-render
          </button>
        </div>
      </div>
    </Layout>
  );
}
