"use client";

0;
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { Button } from "@/components/Button";
import { Indicators } from "@/components/indicators";
import { DataTable } from "./tableUser";
import { columns } from "./columns";
import useStorage from "@/hooks/useStorage";

export default function Users() {
  const { users } = useStorage();
  return (
    <section className="py-14 bg-white h-screen text-black">
      <div className="container  items-center">
        <div>
          <div className="flex justify-between align-middle">
            <h1 className="mb-4 text-2xl md:text-4xl font-extrabold">
              Usuários
            </h1>
            <Button className="mb-5" size="md">
              Adicionar usuário
            </Button>
          </div>

          <div>
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:gap-8 mb-6">
              <Indicators title="Total de usúarios" icon={User} indicator={0} />
              <Indicators title="Novos usúarios" icon={User} indicator={0} />
              <Indicators title="Usúarios ativos" icon={User} indicator={0} />
            </div>
            <div>
              <DataTable columns={columns} data={users} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
