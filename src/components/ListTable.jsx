import Card from "./Card";

// const ListTicket = [
//   {
//     id: "abcd",
//     name: "Ujang",
//     email: "ujang@email.com",
//     subject: "ini kenapa ya bang",
//     created: "00:00",
//     status: "New",
//   },
//   {
//     id: "efgh",
//     name: "Ujang",
//     email: "ujang@email.com",
//     subject: "ini kenapa ya bang",
//     created: "00:00",
//     status: "New",
//   },
//   {
//     id: "jklm",
//     name: "Ujang",
//     email: "ujang@email.com",
//     subject: "ini kenapa ya bang",
//     created: "00:00",
//     status: "New",
//   },
  
// ]

const statusStyle = {
  New: "bg-blue-50 text-blue-600",
  Open: "bg-yellow-50 text-yellow-600",
  "In Progress": "bg-red-50 text-red-600",
  Close: "bg-green-50 text-green-600",
};

const ListTable = ({ListTicket=[]}) => {
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

            {ListTicket.map((ticket) => (

              <div
                key={ticket.id}
                className="grid grid-cols-6 items-center justify-center px-4 py-3 text-sm text-gray-600"
              >

                <span>
                  {ticket.id}
                </span>

                <span>
                  {ticket.name}
                </span>

                <span className="truncate">
                  {ticket.email}
                </span>

                <span className="truncate">
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
