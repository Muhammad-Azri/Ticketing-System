import Button from "@/components/Button";
import Card from "@/components/Card";
import Table from "@/components/Table";
import { Plus } from "lucide-react";
import { useState } from "react";
import CreateTicket from "./modal/CreateTicket";
import DeleteTicket from "./modal/DeleteTicket";

const TicketTable = () => {
  const [ticketList, setTicketList] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  const onAddTicket = (ticket) => {
    setTicketList((prev) => {
      return [...prev, ticket];
    });
  };

  const onClickDelete = (id) => {
    setSelectedTicketId(id);
    setShowDeleteModal(true);
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
    setShowDeleteModal(false);
  };

  return (
    <Card>
      <div className="font-semibold">
        <div className="flex justify-between">
          <span> Tickets</span>
          <Button
            onClick={() => setShowCreateModal(true)}
            variant="secondary"
            icon={<Plus />}
          >
            Create Ticket
          </Button>
        </div>
        <Table ticketList={ticketList} onDelete={onClickDelete} />
        {showCreateModal && (
          <CreateTicket
            onClose={() => setShowCreateModal(false)}
            onAdd={onAddTicket}
          />
        )}
        {showDeleteModal && (
          <DeleteTicket
            onClose={() => setShowDeleteModal(false)}
            onDelete={onDeleteTicket}
          />
        )}
      </div>
    </Card>
  );
};

export default TicketTable;
