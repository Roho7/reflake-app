import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { loginURL } from "../config/URL";
import { redirect, useNavigate } from "react-router-dom";

function Signin() {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const { username, password } = loginInfo;
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    await axios.post(loginURL, loginInfo);
    navigate("/lakes");
    redirect("/lakes");
  };
  return (
    <div>
      <Navbar />
      <div className="bg-base-50 p-4 flex flex-col gap-6">
        <h1 className="text-4xl">Login</h1>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
