import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { redirect } from "react-router-dom";
import { AuthProviderProps, IAuth, IUser } from "../interface";
import { toastType } from "../utils/toast";
import { fetchUser, postData } from "./useFetch";

const AuthContext = createContext<IAuth>({
  user: null,
  loading: false,
  signIn: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setUser(fetchUser());
    if (user) {
      redirect("/profile");
    } else {
      redirect("/");
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const response = await postData("https://reqres.in/api/login", {
      email,
      password,
    });
    if (response.token) {
      localStorage.setItem("user", JSON.stringify(response));
      setUser(response);
      redirect("/profile");
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else if (response.error) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
      toastType.error(response.error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    redirect("/login");
  };

  const memoValue = useMemo(() => {
    return {
      user,
      signIn,
      logout,
      loading,
    };
  }, [user, loading]);
  return (
    <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
