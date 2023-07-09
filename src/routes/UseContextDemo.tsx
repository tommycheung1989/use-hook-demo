import React, { useContext } from "react";

const value = { text: "testing" };
// use React.createContext then you can use the context in somewhere else
export const TextContext = React.createContext(value);

//alternative method
//you can import and use this
export const useTextContext = () => {
  const value = useContext(TextContext);
  return value;
};
