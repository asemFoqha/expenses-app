import { jwtDecode } from "jwt-decode";
import { Suspense, lazy, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import GroupDetails from "./Pages/GroupDetails";

import Navbar from "./components/Navbar/Navbar";
import UserContext from "./context/userContext";
import User from "./interfaces/User";

const LoginPage = lazy(() => import("./Pages/LoginPage"));
const Signup = lazy(() => import("./Pages/Signup"));
const Groups = lazy(() => import("./Pages/Groups"));

function App() {
  const [user, setUser] = useState<User | null>(null);
  const navegate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      const newUser = jwtDecode<User>(token);
      setUser(newUser);
      debugger;
      navegate(location.pathname || "/groups");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/groups">
              <Route index element={user ? <Groups /> : <LoginPage />} />
              <Route
                path=":id"
                element={user ? <GroupDetails /> : <LoginPage />}
              />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to={"/login"} />} />
          </Routes>
        </Suspense>
      </div>
    </UserContext.Provider>
  );
}

export default App;
