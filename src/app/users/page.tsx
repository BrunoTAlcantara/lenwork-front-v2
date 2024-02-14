"use client";

import { CheckCheck, UserPlus, Users2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Indicators } from "@/components/Indicators";
import { useRouter } from "next/navigation";

import { columns } from "./columns";
import { TableUser } from "@/components/TableUser";
import { useMemo } from "react";
import { useUserContext } from "@/context/userContext";

export default function Users() {
  const { users, getIndicators, loading } = useUserContext();
  const data = useMemo(() => users, [users]);
  const dataIndicators = useMemo(() => getIndicators(), [getIndicators]);
  const router = useRouter();

  return (
    <section className="py-14 bg-white h-screen text-black">
      <div className="container  items-center">
        <div>
          <div className="flex justify-between align-middle">
            <h1 className="mb-4 text-2xl md:text-4xl font-extrabold">
              Usuários
            </h1>
            <Button className="mb-5" onClick={() => router.push("/")} size="md">
              Adicionar usuário
            </Button>
          </div>

          <div>
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:gap-8 mb-6">
              <Indicators
                loading={loading}
                title="Total de usuários"
                icon={Users2}
                indicator={dataIndicators.total}
              />
              <Indicators
                loading={loading}
                title="Novos usuários"
                icon={UserPlus}
                indicator={dataIndicators.today}
              />
              <Indicators
                loading={loading}
                title="Usuários ativos"
                icon={CheckCheck}
                indicator={dataIndicators.active}
              />
            </div>
            <div>
              <TableUser columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
