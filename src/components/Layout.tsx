import React from "react";
import useAuth from "../hooks/useAuth";
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const { loading } = useAuth();
  return (
    <div className="w-full h-screen">
      <Navbar />
      <main className="">{loading ? <Loader /> : children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
