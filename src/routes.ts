import React from "react";
const Login = React.lazy(() => import("./views/Login"));
const Profile = React.lazy(() => import("./views/Profile"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/Login", name: "Login", element: Login },
  { path: "/profile", name: "Profile", element: Profile },
];

module.exports = routes;
