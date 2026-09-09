const Card = ({ chart = null, title = "", action = null }) => {
    return (
        <div className="w-full min-h-100 rounded-2xl border-gray-200 bg-white p-6 flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <span className="font-semibold">{title}</span>
                {action}
            </div>
            {chart}
        </div>
    )
}

export default Card;