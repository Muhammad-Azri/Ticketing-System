import Card from "./Card";

const StatCard = ({
    title = "",
    number = "",
    icon = null,
    status = "",
    symbol = ""
}) => {
    return (
        <Card >
            <span className="text-[18px] text-gray-500 font-semibold">{title}</span>
            <span className="text-[30px] font-bold">{number}</span>
            <div className="flex gap-2 text-[16px]">
                {icon}
                <span className="text-green-400">{symbol}</span>
                <span className="text-[14px]">{status}</span>
            </div>
        </Card>

    )
}

export default StatCard;