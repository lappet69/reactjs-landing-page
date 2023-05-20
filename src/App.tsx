import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Profile from "./views/Profile";

const App = () => {
  const { user } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {user ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route element={<Navigate to={"/login"} />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
