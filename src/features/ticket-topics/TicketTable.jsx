import Button from "@/components/Button";
import { PenBox, Trash } from "lucide-react";

import Table from "@/components/Table";

const TicketTable = ({
  onEdit = () => {},
  onDelete = () => {},
  ticketList = [],
}) => {
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
          <Button variant="secondary" onClick={() => onEdit(ticket.id)}>
            <PenBox />
          </Button>

          <Button variant="secondary" onClick={() => onDelete(ticket.id)}>
            <Trash />
          </Button>
        </div>
      ),
    },
  ];

  return <Table data={ticketList} columns={columns} />;
};

export default TicketTable;
