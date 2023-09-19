import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin.tsx";
import Signup from "./pages/Signup.tsx";
import Homepage from "./pages/Homepage.tsx";
import CreateLake from "./components/CreateLake.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "login",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "lakes",
    element: <CreateLake />,
  },
]);

function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
