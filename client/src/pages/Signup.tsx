import React, { useState } from "react";
import axios from "axios";
import { signupURL } from "../config/URL";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useSignIn } from "react-auth-kit";
import { useSetRecoilState } from "recoil";
import { usernameState } from "../config/atom";

function Signup() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    confirmation: "",
  });
  const { username, password, confirmation } = loginInfo;
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const signIn = useSignIn();
  const setRecoilUsername = useSetRecoilState(usernameState);

  const handleChange = (e: any) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const response = await axios.post(signupURL, loginInfo);
    signIn({
      token: response.data.token,
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: { username: loginInfo.username },
    });
    cookies.set("username", username);
    setRecoilUsername(username);
    navigate("/");
  };
  return (
    <div className="h-full flex items-center">
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
          <button onClick={handleSubmit}>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
