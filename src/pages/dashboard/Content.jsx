import { CalendarDays, TrendingUp, Upload, } from "lucide-react";
import MonthPicker from "../../components/MonthPicker";
import Button from "../../components/Button";
import StatCard from "../../components/StatCard";
import Card from "../../components/Card";
import ListTable from "../../components/ListTable";
import BarCharts from "./BarCharts";
import PieCharts from "./PieCharts";


const Content = () => {
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
                    <Button variant="secondary" children="Export" icon={<Upload size={24}/>}/>
                </div>
            </div>
            <div className="flex  gap-4 justify-between ">
                {/* Nanti kita looping */}
                <StatCard icon={<TrendingUp className="text-green-400 text-[8px]" />} title="Open Tickets" number={52} status="Up from last hour" symbol="15%" />
                <StatCard icon={<TrendingUp className="text-green-400 text-[8px]" />} title="New Tickets" number={36} status="Up from last hour" symbol="15%" />
                <StatCard icon={<TrendingUp className="text-green-400 text-[8px]" />} title="in Procces Tickets" number={41} status="Up from last hour" symbol="17%" />
                <StatCard icon={<TrendingUp className="text-green-400 text-[8px]" />} title="Closed Tickets" number={45} status="Up from last hour" symbol="17%" />
            </div>
            <div className="flex gap-4 h-fit w-full justify-between ">
                {/* Card ini dan atas, bakal kita jadiin 1 component */}
                <Card chart={<PieCharts />} title="Tickets Volumes" action={<MonthPicker />} />
                {/* Nama props icon bisa diganti jadi lebih intuitive */}
                <Card chart={<BarCharts />} title="Response Time Trend" action={<MonthPicker />} />
            </div>
            <Card chart={<ListTable />} title="Latest Tickets" />

        </div>
    )
}

export default Content;