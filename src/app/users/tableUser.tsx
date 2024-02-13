import InputSearch from "@/components/InputSearch";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  VisibilityState,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

import { useEffect, useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

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

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter: filtering,
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
    <div className="p-2 mx-auto text-white fill-gray-400">
      <div className="flex justify-end items-end gap-3 p-6">
        <div className="flex gap-3">
          <InputSearch
            placeholder="Filtrar usuários..."
            value={filtering}
            onChange={(event) => {
              setFiltering(event.target.value);
            }}
            className="max-w-sm "
          />
        </div>
      </div>

      <table className="border border-gray-700 w-full">
        <thead className="border border-gray-700 w-full text-left">
          <tr>
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="text-black ">
                    <div>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                  </th>
                ))}
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {false ? (
            <tr>
              <td colSpan={columns.length} className="h-24 text-center">
                Carregando...
              </td>
            </tr>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={row.getIsSelected() ? "selected" : ""}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="text-black">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="h-24 text-center">
                Sem usuários.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
