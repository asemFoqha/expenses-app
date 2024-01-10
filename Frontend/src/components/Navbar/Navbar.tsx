import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Expenses
        </a>

        <div className=" navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              {
                <Link to={"/"} className="nav-link" aria-current="page">
                  Home
                </Link>
              }
            </li>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
