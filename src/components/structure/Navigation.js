import About from "../pages/about/About";
import Account from "../pages/account/Account";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Private from "../pages/private/Private";

export const Navigation = [
    { path: "/",         name: "Home",    element: <Home/>,      isMenu: true,  isPrivate: false },
    { path: "/about",    name: "About",   element: <About/>,     isMenu: true,  isPrivate: false },
    { path: "/login",    name: "Login",   element: <Login/>,     isMenu: false, isPrivate: false },
    { path: "/account",  name: "Account", element: <Account/>,   isMenu: true,  isPrivate: true },
    { path: "/private",  name: "Private", element: <Private/>,   isMenu: true,  isPrivate: true },
]
