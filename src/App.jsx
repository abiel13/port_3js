import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-slate-300/20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
