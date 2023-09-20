import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { loginURL } from "../config/URL";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useSetRecoilState } from "recoil";
import { usernameState } from "../config/atom";

function Login() {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const setRecoilUsername = useSetRecoilState(usernameState);
  const { username, password } = loginInfo;
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleChange = (e: any) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const response = await axios.post(loginURL, loginInfo);
    console.log(response);
    signIn({
      token: response.data.token,
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: { username: loginInfo.username },
    });
    setRecoilUsername(username);
    navigate("/");
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

export default Login;
