import { CalendarDays, TrendingUp, Upload, } from "lucide-react";
import ToolBar from "./components/ToolBar";
import Cards from "./components/Cards";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-between p-4 items-start">
                <div className="flex flex-col">
                    <span className="text-[40px] font-semibold">Admin Dashboard</span>
                    <span className="text-[16px]">Monitor your support ticket system with real-time data</span>
                </div>
                <div className="flex gap-2 items-start ">
                    <ToolBar icon={<CalendarDays/>} title="Sept 30, 2025 - Oct 4, 2025" />
                    <ToolBar icon={<Upload/>} title="Export" />
                </div>
            </div>
            <div className="flex p-3 w-fit gap-4 justify-around">
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]"/>} title="Open Tickets" number={52} status="Up from last hour" symbol="15%"/>
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]"/>} title="New Tickets" number={36} status="Up from last hour" symbol="15%"/>
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]"/>} title="in Procces Tickets" number={41} status="Up from last hour" symbol="17%"/>
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]"/>} title="Closed Tickets" number={45} status="Up from last hour" symbol="17%"/>
            </div>
        </div>
    )
}


export default Dashboard;