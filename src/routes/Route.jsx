import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";

const UserLayout = lazy(() => import("../components/user/layout/UserLayout"));
const AuthLayout = lazy(() => import("../components/user/layout/AuthLayout"));

const Home = lazy(() => import("../pages/user/Home/Home"));
const About = lazy(() => import("../pages/user/About/About"));
const Contact = lazy(() => import("../pages/user/Contact/Contact"));
const Profile = lazy(() => import("../pages/user/Profile/Profile"));
const Movie = lazy(() => import("../pages/user/Movie/Movie"));
const MovieDetails = lazy(() => import("../pages/user/Movie/MovieDetails"));
const SeatsPage = lazy(() => import("../pages/user/Movie/SeatsPage"));
const Login = lazy(() => import("../pages/user/Auth/Login"));
const Register = lazy(() => import("../pages/user/Auth/Register"));
const ForgotPassword = lazy(() => import("../pages/user/Auth/ForgotPassword"));

const routes = [
  {
    path: "/",
    element: UserLayout,
    children: [
      { path: "", element: Home, index: true },
      { path: "about", element: About },
      { path: "movie", element: Movie },
      { path: "contact", element: Contact },
      { path: "account/profile", element: Profile },
      { path: "movies/:id", element: MovieDetails },
      { path: "movie/booking-details/:id", element: SeatsPage },
    ],
  },
  {
    path: "account",
    element: AuthLayout,
    children: [
      { path: "login", element: Login },
      { path: "register", element: Register },
      { path: "password/reset", element: ForgotPassword },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
];

const renderRoutes = () => {
  return routes.map((route, row) => {
    const { path, index, element: Element, children } = route;

    return (
      <Route
        key={row}
        path={path}
        index={index}
        element={Element ? <Element /> : null}
      >
        {children &&
          children.map((child, row) => {
            const { path, index, element: Element } = child;
            return (
              <Route
                key={row}
                path={path}
                index={index}
                element={Element ? <Element /> : null}
              />
            );
          })}
      </Route>
    );
  });
};

export default renderRoutes;
