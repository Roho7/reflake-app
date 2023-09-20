import { useRecoilValue } from "recoil";
import { usernameState } from "../config/atom";
import { useLocation, useNavigate } from "react-router-dom";
import { loginURL, signupURL } from "../config/URL";

function Navbar() {
  const username = useRecoilValue(usernameState);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignupLink = () => {
    navigate("/signup");
  };
  const handleLoginLink = () => {
    navigate("/login");
  };
  return (
    <div className="w-screen flex justify-between p-2 bg-seal-500 absolute top-0 left-0">
      <img src="src/assets/logo-1.png" alt="" className="object-contain" />
      {username && <button className="nav-btn">Logout</button>}
      {location.pathname === "/login" && (
        <button className="nav-btn" onClick={handleSignupLink}>
          Create Account
        </button>
      )}
      {location.pathname === "/signup" && (
        <button className="nav-btn" onClick={handleLoginLink}>
          Login
        </button>
      )}
    </div>
  );
}

export default Navbar;
