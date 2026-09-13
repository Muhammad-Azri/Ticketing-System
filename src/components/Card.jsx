const Card = ({ chart = null, title = "", action = null }) => {
    return (
        <div className="w-full rounded-2xl border-gray-200 bg-white p-6 gap-1">
            <div className="flex items-center justify-between">
                <span className="font-semibold">{title}</span>
                {action}
            </div>
            {chart}
        </div>
    )
}

export default Card;