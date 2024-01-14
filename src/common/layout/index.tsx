import React from "react";
import SideNavbar from "./components/sideNavbar";
import Header from "./components/header";

const Layout = ({ children }) => {
  return (
    <div className="Dashboard relative flex flex-row w-100">
      <SideNavbar />
      <div className="w-[80%]">
        <Header />
        <div className="bg-neutral-100 w-[100%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
