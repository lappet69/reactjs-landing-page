// import { Dispatch, SetStateAction } from "react";
export interface IPackage {
  id?: number;
  img?: string;
  title?: string;
  desc: string;
}

export interface IUser {
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

interface IAuth {
  user: IUser | null;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}
