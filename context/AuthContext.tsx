import React, { useContext, createContext, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { Prisma } from "@prisma/client";
import { ToastContainer, toast } from 'react-toastify';



export type newUser = {
  userName: string;
  password: string;
};

export async function signUp(user: Prisma.UserCreateInput) {
  const response = await fetch(`${window.location.origin}/api/users/SignUp`, {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
     
   
  }
  return response.json();
}

export async function signIn(user: newUser) {
  const response = await fetch(`${window.location.origin}/api/users/SignIn`, {
    method: "POST",
    body: JSON.stringify(user),
  })

  return response.json();
}

export async function ClearCookies() {
  const response = await fetch(`${window.location.origin}/api/users/logout`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function createTweet(tweet: Prisma.TweetCreateInput) {
  const response = await fetch(`${window.location.origin}/api/tweets/CreateTweet`, {
    method: "POST",
    body: JSON.stringify(tweet),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

type authContextType = {
  userI: UserData;
  posts: postData[];
  users: UserData[];
  setUsers: (users: UserData[]) => void;
  setPosts: (posts: postData[]) => void;
  setUserI: (user: UserData) => void;
  setter: (userI: UserData) => void;
  login: (user: newUser) => void;
  logout: () => void;
  registers: (user: Prisma.UserCreateInput) => void;
  setterPosts: (post: Prisma.TweetCreateInput) => void;
};

const authContextDefaultValues: authContextType = {
  userI: null,
  posts: [],
  users: [],
  setUsers: (users: UserData[]) => {},
  setPosts: (posts: postData[]) => {},
  setUserI: (user: UserData) => {},
  setter: (userI: UserData) => {},
  setterPosts: (post: Prisma.TweetCreateInput) => {},
  login: (user: newUser) => {},
  logout: () => {},
  registers: (user: Prisma.UserCreateInput) => {},
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
export type postData = {
  id: String;
  userName: String;
  content: String;
  likes: Number;
  retweets: Number;
  hearts: Number;
  createdAt: Date;
};

export function AuthProvider({ children }: Props) {
  const initData: UserData = {
    createdAt: new Date(Date.now()),
    email: "#",
    id: "#",
    password: "#",
    userName: "#",
    token: "#",
  };

  const [userI, setUserI] = useState<UserData>(initData);
  const [posts, setPosts] = useState<postData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const router = useRouter();

  const login = (user: newUser) => {

    signIn(user).then((result) => {
      
      if(result.result){
         router.push(`${window.location.origin}/TwSections/main`);
         const userRes: UserData = {
           createdAt: result.result?.createdAt,
           email: result.result?.email,
           id: result.result?.id,
           password: result.result?.password,
           userName: result.result?.userName,
           token: result?.token,
      };
      setter(userRes);
      }  else {
        toast(result.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      }
     
    });
  };
  const registers = (user: Prisma.UserCreateInput) => {
    signUp(user).then((result) => {
      if(result.result){
        router.push(`${window.location.origin}/TwSections/main`);
      const userRes: UserData = {
        createdAt: result.result?.createdAt,
        email: result.result?.email,
        id: result.result?.id,
        password: result.result?.password,
        userName: result.result?.userName,
        token: result?.token,
      };
      setter(userRes);
      } else {
        toast(result.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      }
      
    });
  };
  const setter = (userI: UserData) => {
    setUserI(userI);
  };
  const setterPosts = (post: Prisma.TweetCreateInput) => {
    console.log(post);
    createTweet(post).then((result) => {
      console.log(result);
      setPosts([...posts, result.result]);
    });
  };

  const logout = () => {
    
    ClearCookies().then(() => {
      setUserI(initData);
      router.push(`${window.location.origin}`);
    });
  };

  const value = {
    userI,
    posts,
    users,
    setUsers,
    setPosts,
    setUserI,
    setter,
    login,
    logout,
    registers,
    setterPosts,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
