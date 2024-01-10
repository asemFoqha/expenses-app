import { useEffect, useState } from "react";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import User from "./interfaces/User";
import Signup from "./Pages/Signup";
import UserContext from "./context/userContext";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Navbar />
        <div className="full-height">
          {/* routes */}
          {user ? user.fullname : "no user"}
          <LoginPage />
          {/* <Signup /> */}
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
