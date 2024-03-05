import { ExtendedUser } from "@/next-auth";

import { Card, CardHeader, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface IUserInfoProps {
  user?: ExtendedUser;
  label: string;
}

const UserInfo = ({ user, label }: IUserInfoProps) => {
  return (
    <Card className="shadow-mb w-[600px]">
      <CardHeader>
        <h2 className="text-2xl font-semibold text-center">{label}</h2>
      </CardHeader>

      <CardContent className="flex flex-col gap-y-2">
        <div className="w-full border flex p-2 justify-between items-center rounded-md">
          <p className="font-semibold text-sm">ID</p>
          <p className="bg-primary-foreground rounded-md p-1 text-sm font-mono truncate max-w-[200px]">
            {user?.id}
          </p>
        </div>

        <div className="w-full border flex p-2 justify-between items-center rounded-md">
          <p className="font-semibold text-sm">Name</p>
          <p className="bg-primary-foreground rounded-md p-1 text-sm font-mono truncate max-w-[200px]">
            {user?.name}
          </p>
        </div>

        <div className="w-full border flex p-2 justify-between items-center rounded-md">
          <p className="font-semibold text-sm">Email</p>
          <p className="bg-primary-foreground rounded-md p-1 text-sm font-mono truncate max-w-[200px]">
            {user?.email}
          </p>
        </div>

        <div className="w-full border flex p-2 justify-between items-center rounded-md">
          <p className="font-semibold text-sm">Two Factor</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
