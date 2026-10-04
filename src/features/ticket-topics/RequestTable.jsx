import Button from "@/components/Button";
import Card from "@/components/Card";
import Table from "@/components/Table";
import { Plus } from "lucide-react";
import { useState } from "react";
import TicketForm from "./TicketForm";
import Modal from "@/components/Modal";
import DeleteTicket from "@/components/DeleteTicketModal";

const RequestTable = () => {
  const [ticketList, setTicketList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Opened, setOpened] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  const onClickDelete = (id) => {
    setSelectedTicketId(id);
    setOpened(true);
  };

  const onAddTicket = (ticket) => {
    setTicketList((prev) => {
      return [...prev, ticket];
    });
  };

  const onDeleteTicket = () => {
    setTicketList((prev) => {
      const hasil = prev.filter((ticket) => {
        if (ticket.id !== selectedTicketId) {
          return true;
        } else {
          return false;
        }
      });
      return hasil;
    });
    setOpened(false);
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
        <Table
          ticketList={ticketList}
          opened={() => setOpened(true)}
          onDelete={onClickDelete}
        />
        {isModalOpen && (
          <Modal>
            <TicketForm
              onClick={(e) => e.stopPropagation()}
              onClose={() => setIsModalOpen(false)}
              onAdd={onAddTicket}
            />
          </Modal>
        )}
        {Opened && (
          <DeleteTicket
            gajadi={() => console.log("tombol gajadi")}
            onClose={() => setOpened(false)}
            onDelete={() => onDeleteTicket()}
            onClick={() => onClickDelete()}
          />
        )}
      </div>
    </Card>
  );
};

export default RequestTable;
