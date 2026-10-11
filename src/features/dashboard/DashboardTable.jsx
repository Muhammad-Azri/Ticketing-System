import Card from "@/components/Card";
import Table from "@/components/GeneralTabel";

const DashboardTable = () => {
  return (
    <Card>
      <div className="font-semibold">
        <span>Lates Tickets</span>
        <Table></Table>
      </div>
    </Card>
  );
};

export default DashboardTable;
