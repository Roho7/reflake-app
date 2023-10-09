import { useLocation, useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import Cookies from "universal-cookie";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const signout = useSignOut();
  const cookies = new Cookies(null, { path: "/" });

  const handleSignupLink = () => {
    navigate("/signup");
  };
  const handleLoginLink = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    signout();
    cookies.remove("username");
    navigate("/login");
  };
  return (
    <div className="w-screen z-10 flex justify-between p-4 bg-seal-500 sticky top-0 left-0">
      <img
        src="src/assets/logo-1.png"
        alt=""
        className="object-contain cursor-pointer"
        onClick={() => navigate("/")}
      />
      {cookies.get("username") && (
        <a className="nav-btn" onClick={handleLogout}>
          Logout
        </a>
      )}
      {location.pathname === "/login" && (
        <a className="nav-btn" onClick={handleSignupLink}>
          Create Account
        </a>
      )}
      {location.pathname === "/signup" && (
        <a className="nav-btn" onClick={handleLoginLink}>
          Login
        </a>
      )}
    </div>
  );
}

export default Navbar;
