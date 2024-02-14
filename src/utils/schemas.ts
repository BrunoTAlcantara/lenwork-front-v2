import z from "zod";
import {
  validateCPF,
  validatePhoneNumber,
  validateFullName,
} from "./validators";
export const UserSchema = z.object({
  nome: z.string().refine(validateFullName, "* Digite o nome completo."),
  cpf: z.string().refine(validateCPF, "* Digite um cpf válido."),
  email: z.string().email("* Digite um email válido."),
  telefone: z
    .string()
    .refine(validatePhoneNumber, "* Digite um telefone válido."),
});
export type UserProps = z.infer<typeof UserSchema> & {
  id: string;
  createdAt?: Date;
  updatedAt?: Date | null;
  active?: boolean;
};
