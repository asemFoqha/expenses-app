import { jwtDecode } from "jwt-decode";
import { FC, useContext, useState } from "react";
import UserContext from "../../context/userContext";
import User from "../../interfaces/User";
import { LoginUser, login } from "../../services/login/loginService";

const LoginForm: FC = () => {
  const [loginUser, setLoginUser] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);

  //#region Handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      login(loginUser).then(({ data: { data } }) => {
        if (!data) return; //validate the form in the next task
        sessionStorage.setItem("token", JSON.stringify(data));
        const newUser = jwtDecode<User>(data);
        setUser(newUser);
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  //#endregion

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={loginUser?.email}
            onChange={(e) =>
              setLoginUser({
                password: loginUser?.password,
                email: e.target.value,
              })
            }
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={loginUser?.password}
            onChange={(e) =>
              setLoginUser({
                email: loginUser?.email,
                password: e.target?.value,
              })
            }
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
