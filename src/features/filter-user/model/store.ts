import { create } from "zustand";

interface FilterState {
  filterValue: string | null;
  setFilterValue: (filterValue: string) => void;
}

export const useFilter = create<FilterState>()((set) => ({
  filterValue: null,
  setFilterValue: (filterValue) => set(() => ({ filterValue: filterValue })),
}));
