import pages from "./pages";

const routes = [
  { path: "/", component: pages.StartPage },
  { path: "/new", component: pages.RegisterActivity },
  { path: "/login", component: pages.LoginPage },
];

export default routes;
