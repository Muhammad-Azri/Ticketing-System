import { CircleUser } from "lucide-react";

const UserProfile = ({ title = "" }) => {
  return (
    <div className="flex gap-2">
      <CircleUser size={28} />
      <span>{title}</span>
    </div>
  );
};

export default UserProfile;
