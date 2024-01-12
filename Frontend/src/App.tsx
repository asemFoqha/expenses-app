import { jwtDecode } from "jwt-decode";
import { Suspense, lazy, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UserContext from "./context/userContext";
import User from "./interfaces/User";

const LoginPage = lazy(() => import("./Pages/LoginPage"));
const Signup = lazy(() => import("./Pages/Signup"));
const Home = lazy(() => import("./Pages/Home"));

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    !user ? navigate("login") : navigate("/");
  }, [user]);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("token")
      ? JSON.parse(sessionStorage.getItem("token")!)
      : null;
    if (savedUser) {
      const newUser = jwtDecode<User>(savedUser);
      setUser(newUser);
      redirect("/");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Navbar />
        <div className="full-height">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Use a wrapper Route to handle authentication */}
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
