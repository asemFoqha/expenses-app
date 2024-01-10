import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import User from "./interfaces/User";
import UserContext from "./context/userContext";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("./Pages/LoginPage"));
const Signup = lazy(() => import("./Pages/Signup"));
const Home = lazy(() => import("./Pages/Home"));

function App() {
  const [user, setUser] = useState<User | null>(null);

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
