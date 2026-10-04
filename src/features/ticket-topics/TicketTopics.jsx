import MonthPicker from "@/components/MonthPicker";
import TicketTable from "./TicketTable";

const TicketTopics = () => {
  return (
    <div className="p-4 flex flex-col gap-4 ">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[30px] font-semibold">Ticket Topics</span>
        <MonthPicker title="Sort by Date" />
      </div>

      <TicketTable />
    </div>
  );
};

export default TicketTopics;
