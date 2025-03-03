"use client";
import { SnackbarProvider } from "notistack";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type UserType = "user" | "vendor";

interface UserTypeContextProps {
  userType: UserType;
  setUserType: (userType: UserType) => void;
}

const UserTypeContext = createContext<UserTypeContextProps | undefined>(
  undefined
);

export const UserTypeProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<UserType>("user");

  return (
    <SnackbarProvider>
      <UserTypeContext.Provider value={{ userType, setUserType }}>
        {children}
      </UserTypeContext.Provider>
    </SnackbarProvider>
  );
};

export const useUserType = () => {
  const context = useContext(UserTypeContext);
  if (context === undefined) {
    throw new Error("useUserType must be used within a UserTypeProvider");
  }
  return context;
};
