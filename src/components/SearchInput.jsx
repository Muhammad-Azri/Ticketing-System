import { Search } from "lucide-react";

const SearchInput = ()=> {
    return(
         <div className="flex bg-gray-200 rounded-md w-60 p-2 h-10 items-center gap-2">
                <Search className="text-gray-400" />
                <input type="text" name="" id="" placeholder="Search" className="outline-none" />
            </div>
    )
}

export default SearchInput;