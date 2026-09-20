import MonthPicker from "../MonthPicker";
import ListTable from "../ListTable";
import Card from "../Card";
import Button from "../Button";
import { Plus } from "lucide-react";
import TicketForm from "../form/TicketForm";
import { useState } from "react";

const Requests = () => {

    const [ListTicket, setListTicket] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onAddTicket = (data) => {
        setListTicket((prev) => {
            return [...prev, data]
        })
    }

    return (
        <div className="p-4 flex flex-col gap-4 ">
            <div className="flex justify-between items-start mb-4">
                <span className="text-[30px] font-semibold">Requests</span>
                <MonthPicker title="Sort by Date" />
            </div>
            <Card action={<Button onClick={() => setIsModalOpen(true)} variant="secondary" children="Create Ticket" icon={<Plus />} />} chart={<ListTable ListTicket={ListTicket} />} title="Latest Tickets" />

            {isModalOpen && (
                <div className="flex items-center justify-center z-400 fixed bg-black/30 h-dvh w-full top-0 left-0">
                    <TicketForm onClick={(e) => e.stopPropagation()} onClose={() => setIsModalOpen(false)} onAdd={onAddTicket} />
                </div>
            )}
        </div>
    )
}

export default Requests;