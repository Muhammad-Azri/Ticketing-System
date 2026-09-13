const StatCard = ({
    title = "",
    number = "",
    icon = null,
    status = "",
    symbol = ""
}) => {
    return (
        <div className="flex flex-col w-full rounded-2xl border-gray-200 bg-white p-6 gap-1">
            <span className="text-[18px] text-gray-500 font-semibold">{title}</span>
            <span className="text-[30px] font-bold">{number}</span>
            <div className="flex gap-2 text-[16px]">
                {icon}
                <span className="text-green-400">{symbol}</span>
                <span className="text-[14px]">{status}</span>
            </div>
        </div>
    )
}

export default StatCard;