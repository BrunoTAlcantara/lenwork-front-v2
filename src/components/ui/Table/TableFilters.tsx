import { ReactNode } from "react";

export interface FilterProps {
  children: ReactNode;
}

const TableFilters = ({ children }: FilterProps) => {
  return (
    <div className="flex justify-end items-end gap-3  p-6">
      <div className="flex gap-3">{children}</div>
    </div>
  );
};

export default TableFilters;
