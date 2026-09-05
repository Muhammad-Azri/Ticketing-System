import { House, Mail, Ticket, Tickets, User } from "lucide-react"
import Menu from "./Menu";

const SideBar = () => {
    return (
        <div className="h-screen w-64 flex flex-col gap-8 ">
        <div className="p-5">
          <div className="flex gap-2 text-xl">
            <Tickets />
            <h1>Ticket Support</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-10">
          <Menu title="Dashboard" icon={<House/>}/>
          <Menu title="Inbox" icon={<Mail/>}/>
          <Menu title="Ticket Asignment" icon={<User/>}/>
          <Menu title="Ticket Topics" icon={<Ticket/>}/>
        </div>
        <div className="flex flex-col gap-4 p-10">
          <Menu title="Dashboard" icon={<House/>}/>
          <Menu title="Inbox" icon={<Mail/>}/>
          <Menu title="Ticket Asignment" icon={<User/>}/>
          <Menu title="Ticket Topics" icon={<Ticket/>}/>
        </div>

      </div>
    )
}

export default SideBar;