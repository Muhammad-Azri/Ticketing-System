import { Bell, CircleUser, Plus, Search, Sun } from "lucide-react"

const topbar = () => {
    return (
        <div className="flex justify-between p-5 bg-white items-center max-w-[1000px]">
            <div>
                <span>Dashboard</span>
            </div>
            <div className="flex bg-gray-200 rounded-md w-60 p-2 h-10 items-center gap-2">
                <Search className="text-gray-400" />
                <input type="text" name="" id="" placeholder="Search" className="outline-none" />
            </div>
            <div className="flex gap-2 justify-around w-140 items-center">
                <div className="flex gap-3">
                    <Search />
                    <Bell />
                    <Sun />
                </div>
                <div className="flex bg-green-600 hover:bg-green-700 rounded-md w-40 h-10 justify-center text-white p-1 gap-1 items-center cursor-pointer">
                    <Plus />
                    <button className="cursor-pointer border-none">Add Ticket</button>
                </div>
                <div className="flex gap-2">
                    <CircleUser />
                    <span>Muhammad Azri</span>
                </div>
            </div>
        </div>
    )
}

export default topbar;