const Card = ({ chart = null, title = "", action = null, children ="" }) => {
    return (
        <div className="flex flex-col w-full rounded-2xl border-gray-200 bg-white p-6 gap-1">
            <div className="flex items-center justify-between">
                <span className="font-semibold">{title}</span>
                {action}
            </div>
            {chart}
            {children}

        </div>
    )
}

export default Card;