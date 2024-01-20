import { FC } from "react";
import LoginForm from "../components/Login/LoginForm";

const LoginPage: FC = () => {
  return (
    <div className="full-height">
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
