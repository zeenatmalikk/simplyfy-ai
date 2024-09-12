import React from "react";
import { sidebarLinks } from "../constants";
import { Link } from "react-router-dom";

type ItemProps = {
  id: number;
  name: string;
  subRoutes: {
    name: string;
    path: string;
  }[];
  path: string;
};
const Sidebar = () => {
  const [showSubRoutes, setShowSubRoutes] = React.useState(false);
  const handleSubRoutes = () => {
    setShowSubRoutes((prevState) => !prevState);
  };
  return (
    <div className="stickey left-0 top-0 h-screen flex flex-col bg-[#3F3F46] w-fit text-white  lg:w-[250px] p-6">
      <h2>Otis Admin Pro</h2>
      <div className="flex flex-1 flex-col gap-6 pt-10">
        {sidebarLinks.map((item: ItemProps) => {
          return (
            <div className="flex gap-3 flex-col">
              <Link
                to={item.path}
                onClick={handleSubRoutes}
                className="bg-slate-500 py-4 px-2 rounded-md"
              >
                {item.name}
              </Link>
              {showSubRoutes &&
                item.subRoutes.map((subLink) => (
                  <Link to={subLink.path} className="flex gap-3 flex-col px-2">
                    {subLink.name}
                  </Link>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
