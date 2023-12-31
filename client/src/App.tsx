import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Homepage from "./pages/Homepage.tsx";
import { RequireAuth } from "react-auth-kit";
import { useSetRecoilState } from "recoil";
import { lakesState, usernameState } from "./config/atom.ts";
import Cookies from "universal-cookie";
import axios from "axios";
import { viewlakesURL } from "./config/URL.ts";
import { useEffect } from "react";
import Navbar from "./components/Navbar.tsx";
import ViewLakes from "./pages/ViewLakes.tsx";
import ViewPapers from "./pages/ViewPapers.tsx";

function App() {
  const setUsername = useSetRecoilState(usernameState);
  const cookies = new Cookies();

  // Read the "username" cookie using js-cookie
  const usernameCookie = cookies.get("username");

  if (usernameCookie) {
    setUsername(usernameCookie);
  } else {
    setUsername("Username cookie not found.");
  }

  const setLakes = useSetRecoilState(lakesState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(viewlakesURL, {
        username: usernameCookie,
      });
      setLakes(response.data);
    };
    fetchData();
  });

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <Homepage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lakes" element={<ViewLakes />} />
        <Route path="/lakes/:lakeId" element={<ViewPapers />} />
      </Routes>
    </div>
  );
}

export default App;
