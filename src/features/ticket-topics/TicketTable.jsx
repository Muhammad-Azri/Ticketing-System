import Button from "@/components/Button";
import Card from "@/components/Card";
import { PenBox, Plus, Trash } from "lucide-react";
import { useState } from "react";
import CreateTicket from "./modal/CreateTicket";
import DeleteTicket from "./modal/DeleteTicket";

import Table from "@/components/Table";

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

  const statusStyle = {
    New: "bg-blue-50 text-blue-600",
    Open: "bg-yellow-50 text-yellow-600",
    "In Progress": "bg-red-50 text-red-600",
    Close: "bg-green-50 text-green-600",
  };

  const columns = [
    { key: "id", header: "Ticket ID" },
    { key: "name", header: "Name" },
    { key: "email", header: "Email", className: "max-w-30 truncate" },
    { key: "subject", header: "Subject", className: "max-w-30 truncate" },
    { key: "document", header: "Attachment" },
    { key: "created", header: "Created" },
    {
      key: "status",
      header: "Status",
      cell: (value) => (
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs ${
            statusStyle[value] ?? "bg-gray-50 text-gray-600"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      cell: (_, ticket) => (
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => onClickDelete(ticket.id)}>
            <PenBox />
          </Button>

          <Button variant="secondary" onClick={() => onClickDelete(ticket.id)}>
            <Trash />
          </Button>
        </div>
      ),
    },
  ];

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
        <Table data={ticketList} columns={columns} onDelete={onClickDelete} />
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
