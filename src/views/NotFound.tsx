import { Link } from "react-router-dom";
import { Layout } from "../components";

const NotFound = () => {
  return (
    <Layout>
      <div className="h-screen w-full flex flex-col items-center  justify-center">
        <p className="text-7xl">404</p>
        <p className="text-center text-2xl ">Page not found</p>
        <button className="nav-link !m-0">
          <Link to="/">Go back</Link>
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;
