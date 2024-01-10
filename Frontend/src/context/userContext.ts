// context.js
import { Dispatch, SetStateAction, createContext } from "react";
import User from "../interfaces/User";

interface MyContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<MyContextProps>({} as MyContextProps);

export default UserContext;
