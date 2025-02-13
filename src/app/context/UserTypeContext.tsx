"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type UserType = "user" | "vendor";

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
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export const useUserType = () => {
  const context = useContext(UserTypeContext);
  if (context === undefined) {
    throw new Error("useUserType must be used within a UserTypeProvider");
  }
  return context;
};
