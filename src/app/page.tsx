"use client";
import { Button } from "@/components/Button";
import Field from "@/components/Field";
import Icon from "@/components/Icon";
import useStorage from "@/hooks/useStorage";
import { normalizeCpfNumber, normalizePhoneNumber } from "@/utils/masks";
import { UserSchema } from "@/utils/shemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";

export default function Home() {
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(UserSchema),
  });

  const router = useRouter();

  const { saveUser } = useStorage();

  const phoneValue = watch("telefone");
  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("telefone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  useEffect(() => {
    setValue("cpf", normalizeCpfNumber(cpfValue));
  }, [cpfValue, setValue]);

  const onSubmit = async (data: FieldValues) => {
    const response = saveUser(data);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    reset();
    router.push("/users");
  };

  return (
    <div className="flex h-screen ">
      <div className="hidden lg:flex items-center lg:w-8/12 justify-center  h-full bg-white text-black ">
        <div className="flex-1 h-full text-center">
          <div className="relative w-full h-full">
            <div className="w-full h-full relative">
              <Image
                src="/bg.jpg"
                sizes="100%"
                fill={true}
                objectFit="cover"
                alt="imagem-bg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2179b5] to-[#40c8f4] opacity-80" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-10 pt-20  lg:w-1/4 bg-white ">
        <h1 className="text-4xl font-light text-gray-700 mb-6">
          Lean cadastro
        </h1>
        <div className="h-96">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)(e);
            }}
          >
            <Field
              name="nome"
              errors={errors}
              label="Nome completo"
              register={register}
            />
            <Field
              name="email"
              errors={errors}
              label="E-mail"
              register={register}
            />
            <Field name="cpf" errors={errors} label="CPF" register={register} />
            <Field
              name="telefone"
              errors={errors}
              label="Telefone"
              register={register}
            />
            <div className="w-full items-center flex flex-row">
              <Button size="xl" loading={isSubmitting} type="submit">
                Cadastrar
              </Button>
              <Button variant="link" size="lg" type="button">
                Cadastrar
                <Icon icon={ArrowRight} />
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
