import { User } from "@/shared/api/model";
import { Separator } from "@/shared/ui";

interface UserItemProps {
  user: User;
  isLast: boolean;
}

export const UserItem = ({ user, isLast }: UserItemProps) => {
  return (
    <div>
      <div className="flex flex-col py-2 text-sm">
        <span className="font-bold">{user.name}</span>
        <span className="text-muted-foreground">{user.email}</span>
      </div>
      {isLast && <Separator />}
    </div>
  );
};
