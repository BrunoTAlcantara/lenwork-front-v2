"use client";
import { v4 as uuidv4 } from "uuid";
import { UserProps } from "@/utils/schemas";

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

export function editUserLocalStorage(
  userId: string,
  updatedUser: UserProps
): {
  success: boolean;
  message: string;
} {
  try {
    const userList: UserProps[] = getAllUsers();

    const existingUserIndex = userList.findIndex((user) => user.id === userId);

    if (existingUserIndex === -1) {
      return {
        success: false,
        message: "Usuário não encontrado",
      };
    }
    const existingUser = userList[existingUserIndex];
    const now = new Date();
    const updatedUserData = {
      ...existingUser,
      ...updatedUser,
      updatedAt: now,
    };

    userList[existingUserIndex] = updatedUserData;
    localStorage.setItem("users", JSON.stringify(userList));

    return {
      success: true,
      message: "Usuário atualizado com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Erro ao atualizar usuário",
    };
  }
}

export function deleteUserLocalStorage(userId: string): {
  success: boolean;
  message: string;
} {
  try {
    const userList: UserProps[] = getAllUsers();

    const updatedUserList = userList.filter((user) => user.id !== userId);

    if (updatedUserList.length === userList.length) {
      return {
        success: false,
        message: "Usuário não encontrado",
      };
    }

    localStorage.setItem("users", JSON.stringify(updatedUserList));

    return {
      success: true,
      message: "Usuário excluído com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      message: "Erro ao excluir usuário",
    };
  }
}
