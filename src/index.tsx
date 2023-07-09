import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import UseStatePage from "./routes/UseState";
import UseEffect from "./routes/UseEffect";
import UseContexftPage from "./routes/UseContextPage";
import UseCallBack from "./routes/UseCallBack";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "usestate",
    element: <UseStatePage />,
  },
  {
    path: "useEffect",
    element: <UseEffect />,
  },
  {
    path: "useContext",
    element: <UseContexftPage />,
  },
  {
    path: "useCallBack",
    element: <UseCallBack />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
