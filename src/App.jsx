import React, { useEffect } from "react";
import "./styles/global.scss";
import Header from "./components/organisms/header/Header";
import Routeses from "./routes/Routes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routeses />
    </div>
  );
}

export default App;
