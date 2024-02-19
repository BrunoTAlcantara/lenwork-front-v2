import { Table } from "@tanstack/react-table";
import { Button } from "../Button";
import {
  ChevronsRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
} from "lucide-react";

interface TablePaginationProps<TData> {
  table: Table<TData>;
}

function TablePagination<TData>({ table }: TablePaginationProps<TData>) {
  return (
    <div className="flex items-center text-black w-full justify-between px-2 my-4">
      <div className="flex-1 text-xs text-black md:text-sm   md:block">
        {table.getFilteredRowModel().rows.length} linha(s) .
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-xs md:text-sm font-medium">Linhas por página</p>{" "}
          <select
            value={table.getState().pagination.pageSize}
            onChange={(event) => {
              table.setPageSize(Number(event.target.value));
            }}
            className="h-8 w-[70px] bg-white border border-gray-300 rounded-md px-2 py-1"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-xs md:text-sm font-medium">
          Página {table.getState().pagination.pageIndex + 1} de{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex disabled:text-gray-500"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Próxima página</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0 disabled:text-gray-500"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Voltar uma página</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0 disabled:text-gray-500"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Ir para próxima página</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex disabled:text-gray-500"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Ir para ultima página</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default TablePagination;
