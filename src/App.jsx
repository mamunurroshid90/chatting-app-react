import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoggedInUserRoutes from "./privateRoutes/LoggedInUserRoutes";
import NotLoggedInUser from "./privateRoutes/NotLoggedInUser";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUserRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<NotLoggedInUser />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
