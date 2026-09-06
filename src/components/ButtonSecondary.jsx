const ButtonSecondary = ({title="", icon=null}) => {
    return(
         <div className="flex rounded-md justify-center border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 p-2 gap-1 items-center cursor-pointer">
                    {icon}
                    <button className="cursor-pointer border-none">{title}</button>
                </div>
    )
}

export default ButtonSecondary;