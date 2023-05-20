import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, bgLogin } from "../assets";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  // const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn(email, password);
    if (user) {
      navigate("/profile");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen bg-[#f4f4f4]  justify-center items-center">
      <div className="flex w-full max-w-5xl gap-5 justify-center p-12 rounded shadow-xl border bg-white relative">
        <img src={Logo} alt="logo" className="m-auto absolute top-4" />
        <img src={bgLogin} alt="logo" className=" max-w-sm drop-shadow-2xl" />
        <div className="w-full max-w-lg  px-14 bg-white py-12 rounded ">
          <p className="text-center text-xl mb-6">Welcome</p>
          <form className="flex flex-col" onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-form"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="******"
                className="input-form"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="btnLogin" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;