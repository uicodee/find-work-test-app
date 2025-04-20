import { CloudAlert, LucideIcon, UserX } from "lucide-react";

type AlertType = "not-found" | "error";

interface AlertProps {
  type: AlertType;
}

const data: Record<AlertType, { title: string; icon: LucideIcon }> = {
  "not-found": {
    title: "Пользователь не найден, попробуйте другой фильтр",
    icon: UserX,
  },
  error: {
    title: "Произошла ошибка, попробуйте позже",
    icon: CloudAlert,
  },
};

export const Alert = ({ type }: AlertProps) => {
  const Icon = data[type].icon;
  return (
    <div className="h-28 flex flex-col justify-center items-center w-full gap-y-3">
      <Icon className="size-20 text-primary" strokeWidth={1} />
      <span className="text-sm text-muted-foreground text-center">
        {data[type].title}
      </span>
    </div>
  );
};
