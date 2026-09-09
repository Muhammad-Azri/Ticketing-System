import Card from "./Card";

const tickets = [
  {
    id: "ABC34",
    name: "Liam Smith",
    email: "liam@gmail.com",
    subject: "PC not turning on",
    created: "30 min ago",
    status: "New",
  },
  {
    id: "DEF56",
    name: "Olivia Brown",
    email: "olivia@gmail.com",
    subject: "Desktop won't boot up",
    created: "1 hour ago",
    status: "Open",
  },
  {
    id: "JKL90",
    name: "Sophia Wilson",
    email: "sophia@gmail.com",
    subject: "Phone won't turn on",
    created: "3 hours ago",
    status: "In Progress",
  },
  {
    id: "MNO12",
    name: "James Taylor",
    email: "james@gmail.com",
    subject: "Monitor is blank",
    created: "4 hours ago",
    status: "Close",
  },
  {
    id: "GHI78",
    name: "Noah Davis",
    email: "noah@gmail.com",
    subject: "Tablet is unresponsive",
    created: "2 hours ago",
    status: "Open",
  },
]

const statusStyle = {
  New: "bg-blue-50 text-blue-600",
  Open: "bg-yellow-50 text-yellow-600",
  "In Progress": "bg-red-50 text-red-600",
  Close: "bg-green-50 text-green-600",
};

const ListTable = () => {
  return (
    <Card
      chart={
        <div className="w-full overflow-x-auto">

          {/* HEADER */}
          <div className="grid grid-cols-6 bg-emerald-50 rounded-lg px-4 py-3 text-sm text-emerald-600 min-w-187.5">

            <span>Ticket ID</span>
            <span>Name</span>
            <span>Email</span>
            <span>Subject</span>
            <span>Created</span>
            <span>Status</span>

          </div>


          {/* DATA */}
          <div className="min-w-187.5">

            {tickets.map((ticket) => (

              <div
                key={ticket.id}
                className="grid grid-cols-6 items-center px-4 py-3 text-sm text-gray-600"
              >

                <span>
                  {ticket.id}
                </span>

                <span>
                  {ticket.name}
                </span>

                <span>
                  {ticket.email}
                </span>

                <span>
                  {ticket.subject}
                </span>

                <span>
                  {ticket.created}
                </span>

                <span>
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs ${statusStyle[ticket.status]}`}
                  >
                    {ticket.status}
                  </span>
                </span>

              </div>

            ))}

          </div>

        </div>
      }
    />
  )

}

export default ListTable;
