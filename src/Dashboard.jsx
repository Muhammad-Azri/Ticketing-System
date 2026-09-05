import { CalendarDays, TrendingUp, Upload, } from "lucide-react";
import ToolBar from "./components/ToolBar";
import Cards from "./components/Cards";
import TicketCharts from "./components/TicketCharts";
import PieCharts from "./components/PieCharts";
import BarCharts from "./components/BarCharts";
import MonthPicker from "./components/MonthPicker";


const Dashboard = () => {
    return (
        <div className=" p-4 flex flex-col gap-4 ">
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <span className="text-[40px] font-semibold">Admin Dashboard</span>
                    <span className="text-[16px]">Monitor your support ticket system with real-time data</span>
                    {/* <a href="https://prod.liveshare.vsengsaas.visualstudio.com/join?E14A74325761C5E6D49F1B7DBF452697C92B" className="text-[16px]">https://prod.liveshare.vsengsaas.visualstudio.com/join?E14A74325761C5E6D49F1B7DBF452697C92B</a> */}
                </div>
                <div className="flex gap-2 items-start w-[350px] justify-center ">
                    <MonthPicker icon={<CalendarDays />} />
                    <ToolBar icon={<Upload />} title="Export" />
                </div>
            </div>
            <div className="flex  gap-4 justify-between ">
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="Open Tickets" number={52} status="Up from last hour" symbol="15%" />
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="New Tickets" number={36} status="Up from last hour" symbol="15%" />
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="in Procces Tickets" number={41} status="Up from last hour" symbol="17%" />
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="Closed Tickets" number={45} status="Up from last hour" symbol="17%" />
            </div>
            <div className="flex gap-4 h-fit w-full justify-between ">
                <TicketCharts chart={<PieCharts />} title="Tickets Volumes" icon={<MonthPicker />} />
                <TicketCharts chart={<BarCharts />} title="Response Time Trend" icon={<MonthPicker />} />
            </div>
            <TicketCharts title="Latest Tickets" />
        </div>
    )
}


export default Dashboard;