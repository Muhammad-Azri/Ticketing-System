// import { PenBox, Trash } from "lucide-react";
// import Button from "./Button";
// import Card from "./Card";

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

// const statusStyle = {
//   New: "bg-blue-50 text-blue-600",
//   Open: "bg-yellow-50 text-yellow-600",
//   "In Progress": "bg-red-50 text-red-600",
//   Close: "bg-green-50 text-green-600",
// };

// const GeneralTable = ({
//   ticketList = [],
//   onDelete = () => {},
//   onEdit = () => {},
// }) => {
//   return (
//     <Card>
//       <div className="w-full overflow-x-auto">
//         <table className="w-full min-w-187.5 border-collapse">
//           {/* HEADER */}
//           <thead>
//             <tr className="bg-emerald-50 text-sm text-emerald-600">
//               <th className="rounded-l-lg px-4 py-3 text-left font-medium">
//                 Ticket ID
//               </th>
//               <th className="px-4 py-3 text-left font-medium">Name</th>
//               <th className="px-4 py-3 text-left font-medium">Email</th>
//               <th className="px-4 py-3 text-left font-medium">Subject</th>
//               <th className="px-4 py-3 text-left font-medium">Attachment</th>
//               <th className="px-4 py-3 text-left font-medium">Created</th>
//               <th className="rounded-r-lg px-4 py-3 text-left font-medium">
//                 Status
//               </th>
//               <th className="rounded-r-lg px-4 py-3 text-left font-medium">
//                 Action
//               </th>
//             </tr>
//           </thead>

//           {/* DATA */}
//           <tbody className="font-normal">
//             {ticketList.map((ticket) => (
//               <tr
//                 key={ticket.id}
//                 className="border-b text-[12px] text-gray-600"
//               >
//                 <td className="px-4 py-3">{ticket.id}</td>
//                 <td className="px-4 py-3">{ticket.name}</td>
//                 <td className="max-w-50 truncate px-4 py-3">{ticket.email}</td>
//                 <td className="max-w-50 truncate px-4 py-3">
//                   {ticket.subject}
//                 </td>
//                 <td className="px-4 py-3">{ticket.document}</td>
//                 <td className="px-4 py-3">{ticket.created}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`inline-flex rounded-full px-3 py-1 text-xs ${
//                       statusStyle[ticket.status]
//                     }`}
//                   >
//                     {ticket.status}
//                   </span>
//                 </td>
//                 <td className="px-2 py-2 flex">
//                   <Button variant="secondary" onClick={() => onEdit(ticket.id)}>
//                     <PenBox />
//                   </Button>
//                   <Button
//                     variant="secondary"
//                     onClick={() => onDelete(ticket.id)}
//                   >
//                     <Trash />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Card>
//   );
// };

// export default GeneralTable;
