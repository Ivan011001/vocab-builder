"use client";

import { admin } from "@/actions/admin";
import RoleGate from "@/components/auth/role-gate";
import SuccessMessage from "@/components/success-message";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { UserRole } from "@prisma/client";

import { toast } from "sonner";

const AdminPage = () => {
  const onClick = () => {
    admin()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }

        if (data.success) {
          toast.success(data.success);
        }
      })
      .catch(() => {
        toast.warning("Something went wrong!");
      });
  };

  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <h2 className="text-2xl font-semibold text-center">Admin page</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <RoleGate allowedRole={UserRole.ADMIN}>
            <SuccessMessage text="You are allowed to use this functionality!" />
          </RoleGate>

          <div className="p-2 border rounded-md flex items-center justify-between">
            <h3 className="font-semibold text-base">Server action</h3>
            <Button onClick={onClick}>Test example</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
