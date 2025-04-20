import { Input } from "@/shared/ui";
import { useFilter } from "../model/store";

export const FilterInput = () => {
  const { setFilterValue } = useFilter();
  return (
    <div>
      <Input
        placeholder="Фильтр"
        onChange={(e) => setFilterValue(e.target.value)}
      />
    </div>
  );
};
