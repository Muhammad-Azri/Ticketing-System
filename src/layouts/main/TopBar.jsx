import Button from "@/components/Button";
import SearchInput from "@/components/SearchInput";
import UserProfile from "@/components/UserProfile";
import { Bell, Plus, Search, Sun } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex justify-between p-5 bg-white items-center sticky top-0 z-50">
      {/* Div nya dihapus langsung span aja */}
      <span>Dashboard</span>
      {/* Dibikin component SearchInput */}
      <SearchInput />
      <div className="flex gap-2 justify-around w-140 items-center">
        <div className="flex gap-3">
          <Search />
          <Bell />
          <Sun />
        </div>
        {/* Bikin jadi component button dengan variant primary,secondary dll */}
        <Button variant="primary" icon={<Plus />}>
          Add Ticket
        </Button>
        {/* Dibikin jadi component UserProfile (simpan kedalam folder Topbar) */}
        <UserProfile title="Anak Magang" />
      </div>
    </div>
  );
};

export default TopBar;
