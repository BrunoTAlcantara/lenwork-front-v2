"use client";
import { saveUserLocalStorage, getAllUsers } from "@/utils/localStorage";
import { UserProps } from "@/utils/shemas";
import { useEffect, useState } from "react";

function useStorage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedUsers = getAllUsers();
    console.log("aLL USERS", storedUsers);
    setUsers(storedUsers);
  }, [isLoading]);

  const saveUser = (
    newUser: UserProps
  ): {
    success: boolean;
    message: string;
  } => {
    const returnStorage = saveUserLocalStorage(newUser);
    if (!returnStorage.success) {
      return returnStorage;
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
    return returnStorage;
  };

  return {
    saveUser,
    users,
  };
}

export default useStorage;
