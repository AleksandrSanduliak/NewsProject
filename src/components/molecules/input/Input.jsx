import React from "react";
import cl from "./input.module.scss";
const Input = ({ ...props }) => {
  return <input className={cl.input} {...props} />;
};

export default Input;
