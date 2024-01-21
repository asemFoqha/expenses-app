import { jwtDecode } from "jwt-decode";
import { Suspense, lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UserContext from "./context/userContext";
import User from "./interfaces/User";
import GroupDetails from "./Pages/GroupDetails";
import ProtectedRoute from "./components/ProtectedRout";

const LoginPage = lazy(() => import("./Pages/LoginPage"));
const Signup = lazy(() => import("./Pages/Signup"));
const Home = lazy(() => import("./Pages/Home"));

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      const newUser = jwtDecode<User>(token);
      setUser(newUser);
      redirect("/groups");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/groups">
              <Route index element={user ? <Home /> : <LoginPage />} />
              <Route path=":id" element={<GroupDetails />} />
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
