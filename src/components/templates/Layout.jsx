import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <main className="main">
        <div className="main__container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
