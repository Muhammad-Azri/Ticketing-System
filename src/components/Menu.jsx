const Menu = ({ title = "", icon = null }) => {
    return (
        // W nya dihapus trus sidebarnya di lebarin
        <a href="" className="flex gap-2 text-sm hover:bg-green-200 hover:text-green-700 p-2 rounded-md duration-100 cursor-pointer">
            {icon}
            <span>{title}</span>
        </a>
    )
}

export default Menu;