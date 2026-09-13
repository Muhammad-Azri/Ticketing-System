import { NavLink } from "react-router";
import cn from "../utils/cn";

const Menu = ({ title = "", icon = null, to = "/" }) => {
    return (
        // W nya dihapus trus sidebarnya di lebarin
        <NavLink
            to={to}
            className={({ isActive }) => cn("flex gap-2 text-sm hover:bg-green-200 hover:text-green-700 p-2 rounded-md duration-100 cursor-pointer", isActive ? "bg-green-200" : ""

            )}>
            {icon}
            <span>{title}</span>
        </NavLink>
    )
}

export default Menu;