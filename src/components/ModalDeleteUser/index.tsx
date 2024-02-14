"use client";
import { Button } from "@/components/ui/Button";

import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Modal } from "../ui/Modal";
import { useUserContext } from "@/context/userContext";
import { Trash } from "lucide-react";
import useVisibilityControl from "@/hooks/useModal";
import "react-toastify/dist/ReactToastify.css";

function ModalDelete({ id, nome }: { id: string; nome: string }) {
  const { deleteUser } = useUserContext();
  const { onClose, isOpen, toggleVisibility, onOpen } = useVisibilityControl();
  const [isLoading, setIsLoading] = useState(false);
  console.log(isOpen);

  const handleDelete = async (data: FieldValues) => {
    try {
      setIsLoading(true);

      setTimeout(async () => {
        if (!id) {
          toast.error("Usuário não encontrado");
          return;
        }
        const response = deleteUser(id);
        if (!response.success) {
          toast.error(response.message);
          return;
        }
        setIsLoading(false);
      }, 2000);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button variant="danger" size="md" onClick={onOpen} btnType="icon">
        <Trash className="p-1" />
      </Button>
      {isOpen && (
        <Modal.Root
          size={"sm"}
          isOpen={isOpen}
          toggleVisibility={toggleVisibility}
        >
          <Modal.Header title={`Deseja apagar o ${nome}?`} />
          <Modal.Actions>
            <Button
              onClick={onClose}
              loading={isLoading}
              type="button"
              variant="gray"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              loading={isLoading}
              onClick={handleDelete}
              variant="danger"
            >
              Apagar
            </Button>
          </Modal.Actions>

          <ToastContainer />
        </Modal.Root>
      )}
    </div>
  );
}
export default ModalDelete;
