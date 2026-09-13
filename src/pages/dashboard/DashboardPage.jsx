
import AssignmentPage from "../../components/TicketAssignment/AssignmentPage";
import Requests from "../../components/TicketTopics/Requests";
import Content from "./content";


const DashboardPage = () => {
  return (
   <div>
     {/* DASHBOARD */}
        <Content/>

        {/* TICKET TOPICS */}
        <Requests/>

        {/* tICKET ASSIGNMENT */}
        <AssignmentPage/>
   </div>
  )
};

export default DashboardPage;

 