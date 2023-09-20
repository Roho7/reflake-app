import React, { useState } from "react";
import axios from "axios";
import { signupURL } from "../config/URL";

function Signup() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    confirmation: "",
  });

  const { username, password, confirmation } = loginInfo;
  const handleChange = (e: any) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data = await axios.post(signupURL, loginInfo);
    console.log(data);
  };
  return (
    <div>
      <div className="bg-base-50 p-4 flex flex-col gap-6 m-10">
        <h1 className="text-4xl">Create an new account</h1>
        <form action="" className="flex flex-col gap-2">
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
          <input
            type="password"
            id="confirmation"
            name="confirmation"
            placeholder="Confirm password"
            value={confirmation}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
