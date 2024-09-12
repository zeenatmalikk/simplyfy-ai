import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: ReactNode) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-10 bg-gray-200 w-full">{children}</div>
    </div>
  );
};

export default Layout;
