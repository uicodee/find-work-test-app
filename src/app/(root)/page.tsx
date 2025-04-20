"use client";

import { FilterInput, useFilter } from "@/features/filter-user";
import { UserService } from "@/shared/api/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { Alert } from "@/widgets/alert";
import { UserSkeleton } from "@/widgets/skeleton";
import { UserItem } from "@/widgets/user-item";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { filterValue } = useFilter();

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", filterValue],
    queryFn: () => UserService.getUsers(filterValue),
    select: (res) => res.data,
  });

  const renderContent = () => {
    if (isLoading) return <UserSkeleton />;
    if (isError) return <Alert type="error" />;
    if (!users?.length) return <Alert type="not-found" />;

    return users.map((user, index) => (
      <UserItem key={user.id} user={user} isLast={index !== users.length - 1} />
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Пользователи</CardTitle>
        <CardDescription>Список всех пользователей</CardDescription>
      </CardHeader>
      <CardContent>
        <FilterInput />
        <div className="mt-4">{renderContent()}</div>
      </CardContent>
    </Card>
  );
}
