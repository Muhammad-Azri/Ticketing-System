import MonthPicker from "@/components/MonthPicker";
import TicketTable from "./TicketTable";
import { useState } from "react";
import CreateTicket from "./modal/CreateTicket";
import DeleteTicket from "./modal/DeleteTicket";
import Button from "@/components/Button";
import { Plus } from "lucide-react";
import Card from "@/components/Card";

const TicketTopics = () => {
  const [ticketList, setTicketList] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  const editingTicket = ticketList.find(
    (ticket) => ticket.id == selectedTicketId,
  );

  const onAddTicket = (ticket) => {
    setTicketList((prev) => {
      return [...prev, ticket];
    });
  };

  const onEditTicket = (ticketForm) => {
    setTicketList((prev) => {
      const result = prev.map((ticket) => {
        if (ticket.id == selectedTicketId) {
          return ticketForm;
        } else {
          return ticket;
        }
      });
      return result;
    });
  };

  const onClickDelete = (id) => {
    setSelectedTicketId(id);
    setShowDeleteModal(true);
  };

  const onClickEdit = (id) => {
    setSelectedTicketId(id);
    setShowCreateModal(true);
  };

  const onCloseForm = () => {
    setShowCreateModal(false);
    setSelectedTicketId(null);
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
    <>
      <div className="p-4 flex flex-col gap-4 ">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[30px] font-semibold">Ticket Topics</span>
          <MonthPicker title="Sort by Date" />
        </div>

        <Card>
          <div className="flex justify-between  items-center">
            <span className="font-semibold"> Tickets</span>
            <Button
              onClick={() => setShowCreateModal(true)}
              variant="secondary"
              icon={<Plus />}
            >
              Create Ticket
            </Button>
          </div>
          <TicketTable
            ticketList={ticketList}
            onEdit={onClickEdit}
            onDelete={onClickDelete}
          />
        </Card>
      </div>
      {/* Modal */}
      {showCreateModal && (
        <CreateTicket
          defaultValue={editingTicket}
          onClose={onCloseForm}
          onAdd={onAddTicket}
          onEdit={onEditTicket}
        />
      )}
      {showDeleteModal && (
        <DeleteTicket
          onClose={() => setShowDeleteModal(false)}
          onDelete={onDeleteTicket}
        />
      )}
    </>
  );
};

export default TicketTopics;
