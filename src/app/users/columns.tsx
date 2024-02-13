"use client";

import { Button } from "@/components/Button";
// import { Button } from "@/components/ui/button";
import { cpfFormater, telFormater } from "@/utils/formaters";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
// import { PopoverDeleteUser } from "./components/delete-user";
// import { EditModal } from "./components/edit-modal";

export type Users = {
  active?: boolean;
  createdAt?: Date;
  id: string;
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "cpf",
    header: () => <div>CPF</div>,
    cell: ({ row }) => {
      const cpfData: string = row.getValue("cpf");

      return <div>{cpfFormater(cpfData)}</div>;
    },
  },
  {
    accessorKey: "telefone",
    header: () => <div>Telefone</div>,
    cell: ({ row }) => {
      const telData: string = row.getValue("telefone");

      return <div>{telFormater(telData)}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="hidden">id</div>,
    cell: ({ row }) => {
      return <div className="hidden">id</div>;
    },
  },
  {
    accessorKey: "açoes",

    header: "Ações",
    cell: ({ row }) => <div className="flex gap-4"></div>,
  },
];
