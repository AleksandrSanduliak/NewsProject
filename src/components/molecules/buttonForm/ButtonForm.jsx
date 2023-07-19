import React from "react";
import cl from "./buttonform.module.scss";
function ButtonForm({ children, ...props }) {
  return (
    <button className={cl.buttonForm} {...props}>
      {children}
    </button>
  );
}

export default ButtonForm;
