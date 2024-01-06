import { FC } from "react";
import User from "../interfaces/User";
import LoginForm from "../components/Login/LoginForm";

interface Props {
  handleLogin: (user: User) => void;
}

const LoginPage: FC<Props> = ({ handleLogin }) => {
  return (
    <div className="form-container">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};
export default LoginPage;
