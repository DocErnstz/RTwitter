import React, { useState } from "react";

import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useAuth, newUser } from "../context/AuthContext";
import { Prisma } from "@prisma/client";
const initialState = {
  userName: "",
  password: "",
  email: "",
};

export default function Home() {
  const { user, login, register } = useAuth();
  const [form, setForm] = useState<newUser>(initialState);
  const [regForm, setRegForm] = useState<Prisma.UserCreateInput>(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSignup) {
      setRegForm({ ...regForm, [e.target.name]: e.target.value });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSignup) {
      register(regForm);
    } else {
      login(form);
    }

    // triggering the callback
  };
  const setSign = (bool: boolean) => {
    setIsSignup(bool);
  };

  return (
    <>
      {isSignup ? (
        <form onSubmit={onSubmit}>
          <input type="text" name="userName" onChange={handleChange} />
          <input type="text" name="email" onChange={handleChange} />
          <input type="text" name="password" onChange={handleChange} />
          <input type="submit" value="Send" />
          <button onClick={() => setSign(false)}>logIn</button>
        </form>
      ) : (
        <form onSubmit={onSubmit}>
          <input type="text" name="email" onChange={handleChange} />
          <input type="text" name="password" onChange={handleChange} />
          <input type="submit" value="Send" />
          <button onClick={() => setSign(true)}>SignUp</button>
        </form>
      )}
    </>
  );
}
