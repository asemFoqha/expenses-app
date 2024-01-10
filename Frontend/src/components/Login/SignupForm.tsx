import { FC, useState } from "react";

interface SignupUser {
  email?: string;
  fullname?: string;
  password?: string;
}

const SignupForm: FC = () => {
  const [user, setUser] = useState<SignupUser | null>(null);

  //#region Handlers

  //#endregion

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
            value={user?.fullname}
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
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
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
