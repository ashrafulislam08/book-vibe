import React from "react";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-4">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
