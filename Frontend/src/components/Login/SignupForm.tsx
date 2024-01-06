import { FC } from "react";
import User from "../../interfaces/User";

interface Props {
  handleLogin: (user: User) => void;
}

const SignupForm: FC<Props> = ({ handleLogin }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin({
            _id: "123",
            fullname: "ayman",
            email: "asem@gmail.com",
          });
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
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
            type="email"
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
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignupForm;
