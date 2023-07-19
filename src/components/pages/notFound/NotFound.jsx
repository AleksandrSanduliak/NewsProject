import React from "react";
import cl from "./notfound.module.scss";
const NotFound = () => {
  return (
    <>
      <p className={cl.notfound}>
        Page not found
        <br />
        404
        <br />
        please back to main page
      </p>
    </>
  );
};

export default NotFound;
