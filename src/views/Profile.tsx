import { useEffect } from "react";
import { MdLogout } from "react-icons/md";
import { Footer, Navbar } from "../components";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { loading, user, logout } = useAuth();

  useEffect(() => {}, [user]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Navbar />
        <div className="mt-[100px] w-full flex flex-col justify-center items-center h-[calc(100vh-100px)] text-center gap-6">
          <div>
            <p className="text-4xl">Welcome to Profile Page</p>
            <p className="font-semibold text-4xl">{user?.token}</p>
          </div>
          <button
            type="button"
            onClick={() => logout()}
            className="flex items-center"
          >
            <MdLogout className="text-3xl" /> logout
          </button>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Profile;
