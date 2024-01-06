import { FC } from "react";
import SignupForm from "../components/Login/SignupForm";
import User from "../interfaces/User";

interface Props {
  handleLogin: (user: User) => void;
}

const Signup: FC<Props> = ({ handleLogin }) => {
  return (
    <div className="form-container">
      <SignupForm handleLogin={handleLogin} />
    </div>
  );
};
export default Signup;
