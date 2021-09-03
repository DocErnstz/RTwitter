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
      console.log(regForm);
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
    <div className="w-screen h-screen flex items-center justify-center bg-blue-800 font-medium transition-all">
      {isSignup ? (
        <div className="flex flex-col w-96">
        <div className="py-3"><i className="fab fa-twitter fa-2x"></i></div>
        <div className="text-black text-3xl">SignUp in Twitter</div>
        <form onSubmit={onSubmit} action="" className="flex flex-col w-full">
            <label htmlFor="" className="py-4 text-2xl mr-auto">Email</label>
            <input type="email" name="email" className="p-2  w-full rounded-2xl focus:outline-none shadow-3xl border-2" onChange={handleChange} placeholder="name@example.com"/>
            <label htmlFor="" className="py-4 text-2xl mr-auto">Username</label>
            <input type="name" name="userName" className="p-2  w-full rounded-2xl focus:outline-none shadow-2xl border-2" onChange={handleChange} placeholder="name"/>
            <label htmlFor="" className="py-4 text-2xl mr-auto">Password</label>
            <input type="password" name="password" className="p-2 rounded-2xl w-full focus:outline-none shadow-2xl border-2" onChange={handleChange} placeholder="Password"/>
            <input type="submit" className="bg-blue-600 text-white p-4 border-blue rounded-3xl my-5 w-full shadow-2xl transition-all cursor-pointer hover:p-5 hover:text-2xl font-medium btnAnim" value="Sign Up"/>
        </form>
        <div className="flex justify-end">
            <button className="text-white cursor-pointer" onClick={() => setSign(false)}><h1 className="text-white font-medium transition-all">Sign In</h1></button>
        </div>
    </div>
      ) : (
        <div className="flex flex-col w-96">
        <div className="py-3"><i className="fab fa-twitter fa-2x"></i></div>
        <div className="text-dark font-medium font-mono text-3xl">Login in Twitter</div>
        <form onSubmit={onSubmit} action="" className="flex flex-col w-full">
            <label htmlFor="" className="py-4 text-2xl mr-auto">Email</label>
            <input type="email" name="email" className="p-4  w-full rounded-2xl focus:outline-none shadow-3xl border-2" onChange={handleChange} placeholder="name@example.com"/>
            <label htmlFor="" className="py-4 text-2xl mr-auto">Password</label>
            <input type="password" name="password" className="p-4 rounded-2xl w-full focus:outline-none shadow-3xl border-2" onChange={handleChange} placeholder="Password"/>
            <input type="submit" className="bg-blue-600 text-white p-4 rounded-3xl my-5 w-full hover:p-5 hover:text-2xl active:text-dark transition-all cursor-pointer font-medium btnAnim" value="Sign In"/>
        </form>
        <div className="flex justify-end">
            <button className="text-white" onClick={() => setSign(true)}><h1 className="text-white font-medium transition-all">Sign Up</h1></button>
        </div>
    </div>
      )}
    </div>
  );
}
