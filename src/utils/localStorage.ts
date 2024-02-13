"use client";
import { v4 as uuidv4 } from "uuid";
import { UserProps } from "@/utils/shemas";

export function saveUserLocalStorage(user: UserProps): {
  success: boolean;
  message: string;
} {
  try {
    const userList: UserProps[] = getAllUsers();
    const existingUser = userList.find(
      (existingUser) =>
        existingUser.cpf === user.cpf || existingUser.email === user.email
    );

    if (existingUser) {
      return {
        success: false,
        message: "Já existe um usuário com o mesmo CPF ou e-mail",
      };
    }

    const now = new Date();
    const userWithId = {
      ...user,
      id: uuidv4(),
      active: true,
      createdAt: now,
      updatedAt: null,
    };
    userList.push(userWithId);
    localStorage.setItem("users", JSON.stringify(userList));
    return {
      success: true,
      message: "Usuário adicionado com sucesso",
    };
  } catch (error) {
    return {
      success: true,
      message: "Erro ao adicionar usuário",
    };
  }
}

export function getAllUsers(): UserProps[] {
  const userListJSON = localStorage.getItem("users");
  return userListJSON ? JSON.parse(userListJSON) : [];
}

export function deleteUserById(userId: string): string {
  try {
    let userList: UserProps[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const userIndex = userList.findIndex((user) => user.id === userId);

    if (userIndex !== -1) {
      userList.splice(userIndex, 1);

      localStorage.setItem("users", JSON.stringify(userList));

      return "Usuário excluído com sucesso";
    } else {
      return "Usuário não encontrado";
    }
  } catch (error) {
    return "Erro ao excluir usuário";
  }
}
