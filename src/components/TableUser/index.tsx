import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  VisibilityState,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";

import { useState } from "react";
import { TableData } from "../ui/Table";
import InputSearch from "../InputSearch";
import { useUserContext } from "@/context/userContext";
import useDebounce from "@/hooks/useDebounce ";
import { Button } from "../ui/Button";
import { Check, Columns2, X } from "lucide-react";
import { Popover } from "../ui/Popover";
import useVisibilityControl from "@/hooks/useModal";

interface TableUserProps<TData, TValue = {}> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function TableUser<TData, TValue>({
  columns,
  data,
}: TableUserProps<TData, TValue>) {
  const { loading } = useUserContext();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const { onClose, isOpen, toggleVisibility } = useVisibilityControl();

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  useEffect(() => {
    const dataColumns = !isMobile()
      ? {
          name: true,
          actions: true,
          nome: true,
          email: true,
          id: true,
          telefone: true,
          cpf: true,
        }
      : {
          name: true,
          actions: true,
          nome: true,
          email: false,
          id: false,
          telefone: false,
          cpf: false,
        };
    setColumnVisibility(dataColumns);
  }, []);

  const debounceSearch = useDebounce(filtering);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter: debounceSearch,
      columnVisibility,
    },

    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setFiltering,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <TableData.Root>
      <TableData.Filters>
        <InputSearch
          placeholder="Filtrar usuários..."
          value={filtering}
          onChange={(event) => {
            setFiltering(event.target.value);
          }}
        />
        <Button
          variant="primary"
          size="md"
          onClick={toggleVisibility}
          btnType="icon"
        >
          <Columns2 className="p-1" />
        </Button>
        <Popover.Root isOpen={isOpen} onClose={onClose}>
          <Popover.Content>
            <div className=" flex flex-col ">
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    column.getCanHide() &&
                    column.id !== "Actions" &&
                    column.id !== "Id"
                )
                .map((column) => {
                  return (
                    <Button
                      key={column.id}
                      variant="link"
                      className={`capitalize ${
                        column.getIsVisible()
                          ? "active text-black text-xs"
                          : " active text-red-500 text-xs"
                      }`}
                      onClick={() =>
                        column.toggleVisibility(!column.getIsVisible())
                      }
                    >
                      {column.getIsVisible() ? (
                        <div className="flex gap-3 justify-start align-bottom flex-wrap">
                          <div className="flex items-center gap-2">
                            <Check className="ml-1 h-4 w-4 inline-block" />
                            {column.id}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-center gap-2">
                            <X className="ml-1 h-4 w-4 inline-block" />

                            {column.id}
                          </div>
                        </div>
                      )}
                    </Button>
                  );
                })}
            </div>
          </Popover.Content>
        </Popover.Root>
      </TableData.Filters>
      <TableData.Table loading={loading} table={table} columns={columns} />
      <TableData.Pagination table={table} />
    </TableData.Root>
  );
}
