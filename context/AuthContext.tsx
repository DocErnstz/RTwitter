import React, { useContext, createContext, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { Prisma } from "@prisma/client";
export type newUser = {
  userName: string;
  password: string;
};

export async function signUp(user: Prisma.UserCreateInput) {
  const response = await fetch("http://localhost:3000/api/users/SignUp", {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export async function signIn(user: newUser) {
  const response = await fetch("http://localhost:3000/api/users/SignIn", {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

type authContextType = {
  user: boolean;
  login: (user: newUser) => void;
  logout: () => void;
  register: (user: Prisma.UserCreateInput) => void;
};

const authContextDefaultValues: authContextType = {
  user: null,
  login: (user: newUser) => {},
  logout: () => {},
  register: (user: Prisma.UserCreateInput) => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(null);
  const router = useRouter();

  const login = (user: newUser) => {
    console.log(user);
    signIn(user).then((result) => {
      console.log(result);
      router.push("http://localhost:3000/TwSections/main");
      setUser(true);
    });
  };
  const register = (user: Prisma.UserCreateInput) => {
    signUp(user).then((result) => {
      console.log(result);
      router.push("http://localhost:3000/TwSections/main");
      setUser(true);
    });
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
    register,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
