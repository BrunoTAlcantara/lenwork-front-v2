"use client";
import { Button } from "@/components/ui/Button";
import ModalEdit from "@/components/ModalEditUser";
import { cpfFormat, telFormat } from "@/utils/formatters";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import ModalDelete from "@/components/ModalDeleteUser";

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
    header: () => <div className="text-sm">CPF</div>,
    cell: ({ row }) => {
      const cpfData: string = row.getValue("cpf");
      return <div>{cpfFormat(cpfData)}</div>;
    },
  },
  {
    accessorKey: "telefone",
    header: () => <div className="text-sm">Telefone</div>,
    cell: ({ row }) => {
      const telData: string = row.getValue("telefone");

      return <div>{telFormat(telData)}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="hidden">id</div>,
    cell: () => {
      return <div className="hidden">id</div>;
    },
  },
  {
    accessorKey: "ações",
    header: () => <div className="text-sm">Ações</div>,
    cell: ({ row }) => (
      <div className="flex gap-4">
        <ModalEdit
          id={row.getValue("id")}
          cpf={row.getValue("cpf")}
          nome={row.getValue("nome")}
          email={row.getValue("email")}
          telefone={row.getValue("telefone")}
        />
        <ModalDelete id={row.getValue("id")} nome={row.getValue("nome")} />
      </div>
    ),
  },
];
