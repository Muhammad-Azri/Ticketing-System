import MonthPicker from "@/components/MonthPicker";

import RequestTable from "./RequestTable";

const Requests = () => {
  // const [TicketList, setTicketList] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const onAddTicket = (ticket) => {
  //     setTicketList((prev) => {
  //         return [...prev, ticket]
  //     })
  // }

  return (
    <div className="p-4 flex flex-col gap-4 ">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[30px] font-semibold">Requests</span>
        <MonthPicker title="Sort by Date" />
      </div>
      {/* <Card action={<Button onClick={() => setIsModalOpen(true)} variant="secondary" icon={<Plus />}>Create Ticket</Button>} chart={<Table TicketList={TicketList} />} title="Latest Tickets"></Card> */}
      <RequestTable></RequestTable>

      {/* {isModalOpen && (
                <div className="flex items-center justify-center z-400 fixed bg-black/30 h-dvh w-full top-0 left-0">
                    <TicketForm onClick={(e) => e.stopPropagation()} onClose={() => setIsModalOpen(false)} onAdd={onAddTicket} />
                </div>
            )} */}
    </div>
  );
};

export default Requests;
