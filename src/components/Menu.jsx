const Menu = ({ title = "", icon = null }) => {
    return (
        <a href="" className="flex gap-2 w-60 hover:bg-green-200 hover:text-green-700 p-2 rounded-md duration-100 cursor-pointer">
            {icon}
            <span>{title}</span>
        </a>
    )
}

export default Menu;