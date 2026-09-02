import { } from "lucide-react";

const Cards = ({
    title = "",
    number = null,
    icon = null,
    status = "",
    symbol = ""
}) => {
    return (
        <div className="flex flex-col bg-white w-fit p-2 rounded-md">
            <span className="text-[18px] text-gray-500 font-semibold">{title}</span>
            <span className="text-[30px] font-bold">{number}</span>
            <div className="flex gap-2 text-[16px]">
                {icon}
                <span className="text-green-400">{symbol}</span>
                <span>{status}</span>
            </div>
        </div>
    )
}

export default Cards;