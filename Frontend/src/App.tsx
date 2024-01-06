import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import User from "./interfaces/User";

function App() {
  const [user, setUser] = useState<User | null>(null);

  //#region Handlers

  const handleLogin = (user: User) => {
    console.log(user.fullname + " logedd in");
  };

  //#endregion

  return (
    <div className="App">
      <Navbar />
      <div className="full-height">
        {/* routes */}
        <LoginPage handleLogin={handleLogin} />
      </div>
    </div>
  );
}

export default App;
