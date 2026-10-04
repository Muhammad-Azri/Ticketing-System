import Button from "@/components/Button";
import Card from "@/components/Card";
import Table from "@/components/Table";
import { Plus } from "lucide-react";
import { useState } from "react";
import TicketForm from "./TicketForm";

const RequestTable = () => {
  const [ticketList, setTicketList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAddTicket = (ticket) => {
    setTicketList((prev) => {
      return [...prev, ticket];
    });
  };
  return (
    <Card>
      <div className="font-semibold">
        <div className="flex justify-between">
          <span>Lates Tickets</span>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="secondary"
            icon={<Plus />}
          >
            Create Ticket
          </Button>
        </div>
        <Table ticketList={ticketList}></Table>
        {isModalOpen && (
          <div className="flex items-center justify-center z-400 fixed bg-black/30 h-dvh w-full top-0 left-0">
            <TicketForm
              onClick={(e) => e.stopPropagation()}
              onClose={() => setIsModalOpen(false)}
              onAdd={onAddTicket}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default RequestTable;
