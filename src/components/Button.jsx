import cn from "../utils/cn";

const Button = ({children="", icon=null, variant = "primary"})=> {
    const buttonVariant = {
        primary: "bg-green-600 hover:bg-green-700 rounded-md justify-center text-white",
        secondary: "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
    }

    return(
        <button className={cn("flex rounded-md justify-center p-2 gap-1 text-sm items-center cursor-pointer w-fit", buttonVariant[variant])}>
            {icon}
            {children}
        </button>
                
    )
}

export default Button;
