import { NotebookPen, Plus, Upload } from "lucide-react";
import StatCard from "../StatCard";
import Button from "../Button";

const AssignmentPage = () => {
    return (
        <div>
            <div className="p-4 flex gap-4 justify-between ">
                <div className="flex flex-col">
                    <span className="text-[40px] font-semibold">Ticket Assignment</span>
                    <span className="text-4">Automatically assign tickets to agents and groups based on keywords, requests or characteristics.</span>
                </div>
                <div className="flex gap-2 items-start justify-center ">
                    <Button variant="secondary" children="Export" icon={<Upload size={24} />} />
                </div>
            </div>
            <div className="flex  gap-4 justify-between p-4 ">
                <StatCard title="Support Team" />
                <StatCard title="Engineering Team" />
                <StatCard title="Finance Team" />
                <StatCard title="Product Team" />
            </div>
            <div className="p-4 flex gap-4 justify-between ">
                <div className="flex flex-col">
                    <span className="text-[22px] font-medium">Assignment Rules</span>
                    <span className="text-4">Configure automatic ticket routing based on conditions</span>
                </div>
                 <div className="flex gap-2 items-start justify-center ">
                    <Button variant="primary" children="New Rules" icon={<Plus size={22} />}/>
                </div>
            </div>
            <div className="flex flex-col p-4 gap-4">
                <StatCard icon={<NotebookPen />}/>
                <StatCard icon={<NotebookPen />}/>
                <StatCard icon={<NotebookPen />}/>
            </div>

        </div>
    )
}

export default AssignmentPage;