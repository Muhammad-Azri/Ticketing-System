import MonthPicker from "../MonthPicker";
import ListTable from "../ListTable";
import Card from "../Card";
import ButtonSecondary from "../ButtonSecondary";

const Requests = ()=> {
    return(
        <div className="p-4 flex flex-col gap-4 ">
            <div className="flex justify-between items-start mb-4">
                <span className="text-[30px] font-semibold">Requests</span>
                <MonthPicker title="Sort by Date"/>
            </div>
           <Card action={<ButtonSecondary title="Create Ticket +"/>} chart={<ListTable />} title="Latest Tickets" />
        </div>
    )
}

export default Requests;