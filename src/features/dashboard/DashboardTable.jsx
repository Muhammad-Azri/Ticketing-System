import Card from "@/components/Card";
import TicketTable from "../ticket-topics/TicketTable";

const DashboardTable = () => {
  return (
    <Card>
      <div className="font-semibold">
        <span>Lates Tickets</span>
        <TicketTable />
      </div>
    </Card>
  );
};

export default DashboardTable;
