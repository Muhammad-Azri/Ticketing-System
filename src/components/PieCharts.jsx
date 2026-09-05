import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

const data = [
    {
        name: "Open",
        ticket: 52,
        color: "#00B67A",
    },
    {
        name: "In Progress",
        ticket: 34,
        color: "#218C70",
    },
    {
        name: "High",
        ticket: 45,
        color: "#123C32",
    },
    {
        name: "Resolved",
        ticket: 12,
        color: "#70DCC0",
    },

]

const PieCharts = () => {
    return (
        <div className="relative mx-auto h-[230px] w-full">
            <ResponsiveContainer width="100%" height="100%" >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="ticket"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={90}
                        paddingAngle={0}
                        stroke="none"
                        shape={(props) => {
                            const {
                                cx,
                                cy,
                                innerRadius,
                                outerRadius,
                                startAngle,
                                endAngle,
                                index,
                            } = props;

                            return (
                                <Sector
                                    cx={cx}
                                    cy={cy}
                                    innerRadius={innerRadius}
                                    outerRadius={outerRadius}
                                    startAngle={startAngle}
                                    endAngle={endAngle}
                                    fill={data[index].color}
                                />
                            );
                        }}
                    >

                    </Pie>
                </PieChart>

            </ResponsiveContainer>


            <div className="absolute inset-16 flex items-center justify-center">
                <div className="text-center">

                    <div className="text-[20px] font-bold text-gray-800">
                        2548
                    </div>

                    <div className="text-sm text-gray-500">
                        Visitors
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-2 ">

                {data.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-arond gap-4"
                    >

                        <div className="flex items-center gap-2">

                            <span
                                className="h-3 w-3 rounded-full"
                                style={{
                                    backgroundColor: item.color,
                                }}
                            />

                            <span className="text-sm text-gray-700">
                                {item.name}
                            </span>

                        </div>
                        <span className="text-sm font-medium text-gray-800">
                            {item.ticket}%
                        </span>
                    </div>
                ))}
            </div>
        </div>




    )
}

export default PieCharts;