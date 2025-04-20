import { Skeleton } from "@/shared/ui/skeleton";

export const UserSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-12" />
      ))}
    </div>
  );
};
