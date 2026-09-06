import { CalendarDays, TrendingUp, Upload, } from "lucide-react";
import Cards from "./components/Cards";
import TicketCharts from "./components/TicketCharts";
import PieCharts from "./components/PieCharts";
import BarCharts from "./components/BarCharts";
import MonthPicker from "./components/MonthPicker";
import ListTable from "./components/ListTable";
import ButtonSecondary from "./components/ButtonSecondary";

// 1. Button di topbar sama button export dibikin jadi 1 Component, dibedain pake variant (text nya ditaro di children)
// 2. 

const Dashboard = () => {
    return (
        <div className=" p-4 flex flex-col gap-4 ">
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <span className="text-[40px] font-semibold">Admin Dashboard</span>
                    <span className="text-[16px]">Monitor your support ticket system with real-time data</span>
                    {/* <a href="https://prod.liveshare.vsengsaas.visualstudio.com/join?E14A74325761C5E6D49F1B7DBF452697C92B" className="text-[16px]">https://prod.liveshare.vsengsaas.visualstudio.com/join?E14A74325761C5E6D49F1B7DBF452697C92B</a> */}
                </div>
                <div className="flex gap-2 items-start justify-center ">
                    <MonthPicker icon={<CalendarDays />} />
                    <ButtonSecondary icon={<Upload size={24}/>} title="Export" />
                </div>
            </div>
            <div className="flex  gap-4 justify-between ">
                {/* Nanti kita looping */}
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="Open Tickets" number={52} status="Up from last hour" symbol="15%" />
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="New Tickets" number={36} status="Up from last hour" symbol="15%" />
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="in Procces Tickets" number={41} status="Up from last hour" symbol="17%" />
                <Cards icon={<TrendingUp className="text-green-400 text-[8px]" />} title="Closed Tickets" number={45} status="Up from last hour" symbol="17%" />
            </div>
            <div className="flex gap-4 h-fit w-full justify-between ">
                {/* Card ini dan atas, bakal kita jadiin 1 component */}
                <TicketCharts chart={<PieCharts />} title="Tickets Volumes" icon={<MonthPicker />} />
                {/* Nama props icon bisa diganti jadi lebih intuitive */}
                <TicketCharts chart={<BarCharts />} title="Response Time Trend" icon={<MonthPicker />} />
            </div>
            <TicketCharts chart={<ListTable />} title="Latest Tickets" />

        </div>
    )
}


export default Dashboard;