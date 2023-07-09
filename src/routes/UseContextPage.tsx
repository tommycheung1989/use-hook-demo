import { useContext } from "react";
import { TextContext, useTextContext } from "./UseContextDemo";
import Layout from "../Layout";

export default function UseContexftPage() {
  const value = useContext(TextContext);

  //it is same as the useContext one
  const value2 = useTextContext();
  return (
    <Layout>
      <div>
        the text from the TextContext useContextHook is{" "}
        <span className="font-bold">{value.text}</span>
        <br />
        this is using the useTextContext custom hook{" "}
        <span className="font-bold">{value2.text}</span>
      </div>
    </Layout>
  );
}
