import React, { useState } from "react";

import { useAuth, newUser } from "../context/AuthContext";
import { Prisma } from "@prisma/client";
const initialState = {
  userName: "",
  password: "",
  email: "",
};

export default function Home() {
  const { login, register } = useAuth();
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
      console.log(form);
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
          <label htmlFor="un">userName</label>
          <input id="un" type="text" name="userName" onChange={handleChange} />
          <label htmlFor="em">email</label>
          <input id="em" type="text" name="email" onChange={handleChange} />
          <label htmlFor="pass">password</label>
          <input
            id="pass"
            type="text"
            name="password"
            value={regForm.password}
            onChange={handleChange}
          />
          <input type="submit" data-testid="btnSub" value="Send" />
          <button aria-label="button-name" onClick={() => setSign(false)}>
            logIn
          </button>
        </form>
      ) : (
        <form onSubmit={onSubmit}>
          <label htmlFor="em">email</label>
          <input id="em" type="text" name="email" onChange={handleChange} />
          <label htmlFor="pass">password</label>
          <input
            id="pass"
            type="text"
            name="password"
            onChange={handleChange}
          />
          <input type="submit" data-testid="btnSub" value="Send" />
          <button aria-label="button-name" onClick={() => setSign(true)}>
            SignUp
          </button>
        </form>
      )}
    </>
  );
}
