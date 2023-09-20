import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Homepage from "./pages/Homepage.tsx";
import CreateLake from "./components/CreateLake.tsx";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
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
        <Route path="/lakes" element={<CreateLake />} />
      </Routes>
    </div>
  );
}

export default App;
