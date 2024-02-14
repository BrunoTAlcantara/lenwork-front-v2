import { ColumnDef, Table, flexRender } from "@tanstack/react-table";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { LoadingSpinner } from "../Spinner";

interface TableProps<TData, TValue = {}> {
  columns: ColumnDef<TData, TValue>[];
  table: Table<TData>;
  loading: boolean;
}

function Table<TData, TValue>({
  table,
  columns,
  loading,
}: TableProps<TData, TValue>) {
  return (
    <div className="relative w-full overflow-auto border">
      <table className="w-full">
        <thead className="border p-20 w-full text-left">
          <tr>
            {table.getHeaderGroups().map((headerGroup) => (
              <Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="text-black p-3">
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
              </Fragment>
            ))}
          </tr>
        </thead>
        <motion.tbody
          className="transition-opacity ease-in w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {loading ? (
            <tr className=" text-center w-full">
              <td colSpan={columns.length} className=" py-2 text-center">
                <div className="flex flex-col py-24 items-center justify-center">
                  <LoadingSpinner className="text-primary  h-20 w-20 mb-4" />
                  <h1 className="text-xl text-gray-400">Carregando...</h1>
                </div>
              </td>
            </tr>
          ) : table.getRowModel().rows?.length ? (
            <>
              <motion.tr
                key={table.getRowModel().rows[0].id}
                className={
                  table.getRowModel().rows[0].getIsSelected()
                    ? "selected transition-all duration-700"
                    : "transition-all duration-700"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {table
                  .getRowModel()
                  .rows[0].getVisibleCells()
                  .map((cell) => (
                    <td
                      key={cell.id}
                      className="text-black text-xs md:text-base p-4 transition-all duration-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
              </motion.tr>
              {table
                .getRowModel()
                .rows.slice(1)
                .map((row) => (
                  <motion.tr
                    key={row.id}
                    className={
                      row.getIsSelected()
                        ? "selected transition-all duration-700"
                        : "transition-all duration-700"
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="text-black text-xs md:text-base p-4 transition-all duration-700"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
            </>
          ) : (
            <tr>
              <td colSpan={columns.length} className="h-24 text-center">
                Sem usuários.
              </td>
            </tr>
          )}
        </motion.tbody>
      </table>
    </div>
  );
}

export default Table;
