import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ countActive, countFinished }) => {
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer countActive={countActive} countFinished={countFinished} />
        </footer>
      </div>
    </>
  );
};

export default Layout;
