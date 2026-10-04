import { Outlet } from "react-router";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Layout = () => {
  return (
    <div>
      <div className="flex h-dvh ">
        {/* SIdebar */}
        <SideBar />
        <div className="bg-mauve-100 w-full border-2 border-mauve-100 overflow-y-auto">
          {/* CONTAINER TOPBAR */}
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
