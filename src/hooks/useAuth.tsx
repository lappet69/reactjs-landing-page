import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { redirect } from "react-router-dom";
import { AuthProviderProps, IAuth, IUser } from "../interface";
import { toastType } from "../utils/toast";

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
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, [user]);
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) =>
        res.json().then((data) => {
          if (data.token) {
            setUser(data);
            redirect("/profile");
          } else if (data.error) {
            toastType.error(data.error);
          }
        })
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    return response;
  };
  const logout = () => {
    redirect("/login");
    setUser(null);
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
