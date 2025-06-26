import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 bg-primary text-base-content">
        <Navbar></Navbar>
      </header>
      <main className="bg-base-100">
        <Outlet></Outlet>
      </main>
      <footer className="bg-primary">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
