import { useState } from "react";
import Navbar from "../components/Navbar";

function Signin() {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  const { username, password } = loginInfo;
  const handleChange = (e: any) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-base-50 p-4 flex flex-col gap-6">
        <h1 className="text-4xl">Login</h1>
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
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
