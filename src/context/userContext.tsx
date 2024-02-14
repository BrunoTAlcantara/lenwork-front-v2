import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { startOfDay, isEqual } from "date-fns";

import { UserProps } from "@/utils/schemas";
import {
  deleteUserLocalStorage,
  editUserLocalStorage,
  getAllUsers,
  saveUserLocalStorage,
} from "@/utils/localStorage";
type Indicator = {
  today: number;
  total: number;
  active: number;
};
type ResponseUser = {
  success: boolean;
  message: string;
};

type UserContextType = {
  users: UserProps[];
  saveUser: (newUser: UserProps) => ResponseUser;
  deleteUser: (userId: string) => ResponseUser;
  editUser: (userId: string, updateUser: UserProps) => ResponseUser;
  getIndicators: () => Indicator;
  loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedUsers = getAllUsers();
    setUsers(storedUsers);
  }, [isLoading]);

  const saveUser = (newUser: UserProps): ResponseUser => {
    const returnStorage = saveUserLocalStorage(newUser);
    if (!returnStorage.success) {
      return returnStorage;
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
    return returnStorage;
  };
  const deleteUser = (userId: string): ResponseUser => {
    setIsLoading(true);

    setTimeout(() => {
      const returnStorage = deleteUserLocalStorage(userId);
      if (!returnStorage.success) {
        setIsLoading(false);
        return returnStorage;
      }

      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.filter((user) => user.id !== userId);
        setIsLoading(false);
        return updatedUsers;
      });
    }, 1000);

    return { success: true, message: "Exclusão de usuário iniciada..." };
  };

  const getIndicators = () => {
    const today = new Date();

    const activeUsersToday = users.filter((user) => {
      if (user.createdAt) {
        const userCreatedAtStartOfDay = startOfDay(new Date(user.createdAt));
        return isEqual(userCreatedAtStartOfDay, startOfDay(today));
      }
      return false;
    });

    const indicator = {
      active: users.filter((user) => user.active === true).length,

      today: activeUsersToday.length,
      total: users.length,
    };

    return indicator;
  };

  const editUser = (userId: string, updatedUser: UserProps): ResponseUser => {
    setIsLoading(true);

    setTimeout(() => {
      const returnStorage = editUserLocalStorage(userId, updatedUser);
      if (!returnStorage.success) {
        setIsLoading(false);
        return returnStorage;
      }

      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.map((user) => {
          if (user.id === userId) {
            return { ...user, ...updatedUser };
          }
          return user;
        });
        setIsLoading(false);
        return updatedUsers;
      });
    }, 1000);

    return { success: true, message: "Atualização de usuário iniciada..." };
  };

  const contextValue: UserContextType = {
    users,
    saveUser,
    getIndicators,
    deleteUser,
    editUser,
    loading: isLoading,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext deve ser usado dentro de um UserProvider");
  }
  return context;
};
