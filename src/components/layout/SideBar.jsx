import { House, Mail, Ticket, Tickets, User } from "lucide-react"
import Menu from "../Menu";

const SideBar = () => {
    return (
        <div className="h-screen w-70 flex flex-col gap-8 ">
        <div className="p-5">
          <div className="flex gap-2 text-xl">
            <Tickets />
            <h1>Ticket Support</h1>
          </div>
        </div>
        {/* *nanti kita looping */}
        <div className="flex flex-col gap-4 p-5">
          <Menu to="/" title="Dashboard" icon={<House size={20}/>}/>
          <Menu to="Inbox" title="Inbox" icon={<Mail size={20}/>}/>
          <Menu to="ticket-assignment" title="Ticket Assignment" icon={<User size={20}/>}/>
          <Menu to="ticket-topics" title="Ticket Topics" icon={<Ticket size={20}/>}/>
        </div>
       

      </div>
    )
}

export default SideBar;