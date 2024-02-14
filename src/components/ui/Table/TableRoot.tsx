import { ReactNode } from "react";

interface TableRootProps {
  children: ReactNode;
}

function TableRoot({ children }: TableRootProps) {
  return <div className="p-2 mx-auto text-white fill-gray-400">{children}</div>;
}
export default TableRoot;
