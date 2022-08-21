import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import User from "../../models/User";
import { useLocalStorage } from "./useLocalStorage";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const AuthContext = createContext<{
  tkn: string | Function | null;
  login: Function;
  logout: Function;
  user: User | null;
  setUser: Dispatcher<User | null>;
} | null>(null);

export const AuthProvider = ({ children }: { children: any }) => {
  const [tkn, setTkn] = useLocalStorage("foliolens_token", null);
  const [user, setUser] = useState<User | null>(null);

  const login = (data: string | null) => {
    if (typeof setTkn === "function") {
      setTkn(data);
    }
  };

  const logout = () => {
    if (typeof setTkn === "function") {
      setTkn(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ tkn, login, logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
