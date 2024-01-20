import { FC } from "react";
import SignupForm from "../components/Login/SignupForm";

const Signup: FC = () => {
  return (
    <div className="full-height">
      <div className="form-container">
        <SignupForm />
      </div>
    </div>
  );
};
export default Signup;
