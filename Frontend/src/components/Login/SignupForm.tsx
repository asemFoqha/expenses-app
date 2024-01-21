import { FC, FormEvent, useContext, useState } from "react";
import { SignupUser, signup } from "../../services/login/loginService";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const SignupForm: FC = () => {
  const [user, setSignUser] = useState<SignupUser>({
    email: "",
    fullname: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  //#region Handlers

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signup(user).then((res) => {
        sessionStorage.setItem("token", JSON.stringify(res.data.data.token));
        setUser(res.data.data.user);
        navigate("/groups");
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  //#endregion

  return (
    <div>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={user?.email || ""}
            onChange={(e) => setSignUser({ ...user, email: e.target.value })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            value={user?.fullname || ""}
            onChange={(e) => setSignUser({ ...user, fullname: e.target.value })}
            className="form-control"
            id="fullname"
            aria-describedby="fullnameHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={user?.password || ""}
            onChange={(e) => setSignUser({ ...user, password: e.target.value })}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignupForm;
