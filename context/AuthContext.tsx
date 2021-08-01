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
  userI: UserData;
  setter: (userI: UserData) => void;
  login: (user: newUser) => void;
  logout: () => void;
  register: (user: Prisma.UserCreateInput) => void;
};

const authContextDefaultValues: authContextType = {
  userI: null,
  setter: (userI: UserData) => {},
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

export type UserData = {
  createdAt: Date;
  email: String;
  id: String;
  password: String;
  userName: String;
  token: String;
};

export function AuthProvider({ children }: Props) {
  const [userI, setUserI] = useState<UserData>(null);
  const router = useRouter();

  const login = (user: newUser) => {
    signIn(user).then((result) => {
      router.push("http://localhost:3000/TwSections/main");
      const userRes: UserData = {
        createdAt: result.result.createdAt,
        email: result.result.email,
        id: result.result.id,
        password: result.result.password,
        userName: result.result.userName,
        token: result.token,
      };
      setter(userRes);
    });
  };
  const register = (user: Prisma.UserCreateInput) => {
    signUp(user).then((result) => {
      router.push("http://localhost:3000/TwSections/main");
      const userRes: UserData = {
        createdAt: result.result.createdAt,
        email: result.result.email,
        id: result.result.id,
        password: result.result.password,
        userName: result.result.userName,
        token: result.token,
      };
      setter(userRes);
    });
  };
  const setter = (userI: UserData) => {
    setUserI(userI);
  };

  const logout = () => {};

  const value = {
    userI,
    setter,
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
