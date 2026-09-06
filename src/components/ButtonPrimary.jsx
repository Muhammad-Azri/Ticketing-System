
const ButtonPrimary = ({title="", icon=null, variant=""})=> {
    return(
        <div className="flex  bg-green-600 hover:bg-green-700 rounded-md justify-center text-white p-2 gap-1 items-center cursor-pointer">
                    {icon}
                    <button className="cursor-pointer border-none">{title}</button>
                </div>
    )
}


export default ButtonPrimary;
