import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  //#region Handlers

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("token");
  };

  //#endregion

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Expenses
        </a>

        <div className=" navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              {user && (
                <Link to={"/"} className="nav-link" aria-current="page">
                  Home
                </Link>
              )}
            </li>
            {!user && (
              <>
                <li className="nav-item">
                  <Link to={"login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"signup"} className="nav-link">
                    Signup
                  </Link>
                </li>
              </>
            )}
            {user && (
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link">
                  signout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
