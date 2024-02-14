"use client";
import { Button } from "@/components/ui/Button";
import Field from "@/components/Field";
import { normalizeCpfNumber, normalizePhoneNumber } from "@/utils/masks";
import { UserProps, UserSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit2Icon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Modal } from "../ui/Modal";
import useVisibilityControl from "@/hooks/useModal";

import { useUserContext } from "@/context/userContext";

function ModalEdit(user: UserProps) {
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      id: user.id,
      nome: user.nome,
      cpf: user.cpf,
      email: user.email,
      telefone: user.telefone,
    },
  });

  const { onClose, isOpen, toggleVisibility, onOpen } = useVisibilityControl();
  const [isLoading, setIsLoading] = useState(false);

  const { editUser } = useUserContext();

  const phoneValue = watch("telefone");
  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("telefone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  useEffect(() => {
    setValue("cpf", normalizeCpfNumber(cpfValue));
  }, [cpfValue, setValue]);

  const onSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        if (!user.id) {
          toast.error("Usuário não encontrado");
          return;
        }
        const response = editUser(user.id, data as UserProps);
        if (!response.success) {
          toast.error(response.message);
          return;
        }
        setIsLoading(false);
      }, 2000);
    } catch (e) {
      setIsLoading(false);
    }
    reset();
  };

  return (
    <div>
      <Button variant="primary" size="md" onClick={onOpen} btnType="icon">
        <Edit2Icon className="p-1" />
      </Button>
      {isOpen && (
        <Modal.Root isOpen={isOpen} toggleVisibility={toggleVisibility}>
          <form
            className="w-full "
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)(e);
            }}
          >
            <Modal.Header
              title="Editar usuário"
              subTitle="Após editar, clique em salvar"
              onClose={onClose}
            />
            <Modal.Content>
              <div className="px-10">
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
                <Field
                  name="cpf"
                  errors={errors}
                  label="CPF"
                  register={register}
                />
                <Field
                  name="telefone"
                  errors={errors}
                  label="Telefone"
                  register={register}
                />
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Button
                onClick={onClose}
                loading={isLoading}
                type="button"
                variant="gray"
              >
                Cancelar
              </Button>
              <Button type="submit" loading={isLoading} variant="success">
                Salvar
              </Button>
            </Modal.Actions>
          </form>
          <ToastContainer />
        </Modal.Root>
      )}
    </div>
  );
}
export default ModalEdit;
