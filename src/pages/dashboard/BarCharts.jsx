import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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

const BarCharts = () => {
    return (
        <div className="h-72 w-112.5">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="ticket"
                        fill="#70DCC0"
                        radius={[6, 6, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )

}

export default BarCharts;