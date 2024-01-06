import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="full-height">
        {/* routes */}
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
