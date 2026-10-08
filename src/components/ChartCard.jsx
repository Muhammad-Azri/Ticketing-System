import Card from "./Card";

const ChartCard = ({ title = "", children = "" }) => {
  return (
    <Card>
      <div className="flex flex-col w-full rounded-2xl border-gray-200 bg-white  gap-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{title}</span>
        </div>
        {children}
      </div>
    </Card>
  );
};

export default ChartCard;
