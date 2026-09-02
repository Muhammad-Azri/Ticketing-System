const ToolBar = ({icon = null, title= ""}) => {
    return (
        <button className="flex text-xs items-center gap-3 border border-gray-200 rounded-md px-4 py-3 bg-white text-gray-600 shadow-sm">
            {icon}
            <span>{title}</span>
        </button>
    )
}

export default ToolBar;