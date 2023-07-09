import { useEffect } from "react";
import Layout from "../Layout";

export default function UseEffect() {
  useEffect(() => {
    alert("hi");
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1>UseEffect Demo Page</h1>
      </div>
    </Layout>
  );
}
