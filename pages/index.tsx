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
        <div className="signup">
          <form onSubmit={onSubmit}>
            <ul className="form-style-1">
              <li>
                <h1>Sign Up for Twitter</h1>
              </li>
              <li>
                <input
                  id="un"
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  placeholder="UserName"
                />
              </li>
              <li>
                <input
                  id="em"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </li>
              <li>
                <input
                  id="pass"
                  type="text"
                  name="password"
                  value={regForm.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </li>
              <li>
                <input
                  type="submit"
                  id="btnSub"
                  data-testid="btnSub"
                  value="Send"
                />
              </li>
              <li>
                <a aria-label="button-name" onClick={() => setSign(false)}>
                  Sing In
                </a>
              </li>
            </ul>
          </form>
        </div>
      ) : (
        <div className="signin">
          <form onSubmit={onSubmit}>
            <ul className="form-style-1">
              <li>
                <h1>Sign In for Twitter</h1>
              </li>
              <li>
                <input
                  id="em"
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
              </li>
              <li>
                <input
                  id="pass"
                  type="text"
                  name="password"
                  onChange={handleChange}
                />
              </li>
              <li>
                <input
                  type="submit"
                  id="btnSub"
                  data-testid="btnSub"
                  value="Send"
                />
              </li>
              <li>
                <a aria-label="button-name" onClick={() => setSign(true)}>
                  SignUp
                </a>
              </li>
            </ul>
          </form>
        </div>
      )}
    </>
  );
}
