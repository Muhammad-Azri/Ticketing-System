import {
    // BarChart,
    // Bar,
    // XAxis,
    // YAxis,
    // CartesianGrid,
    // Tooltip,

} from "recharts";
import MonthPicker from "./MonthPicker";


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
console.log(data)


const TicketCharts = ({chart=null, title= ""}) => {
    return (
        <div className="w-fit h-[380px] rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <span>{title}</span>
                <MonthPicker />
            </div>
            {chart}
        </div>
    )
}

export default TicketCharts;