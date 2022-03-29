import { HomeIcon, PersonIcon } from "components/Icons/Icons";
import { FaStar, FaUser } from "react-icons/fa";
import Dashboard from "views/Dashboard/Dashboard";
import Profile from "views/Dashboard/Profile";
import Subscriptions from "views/Dashboard/Subscriptions";
import UsersList from "views/Dashboard/Users";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Admin Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/users-list",
    name: "Users",
    icon: <FaUser color="inherit" />,
    component: UsersList,
    layout: "/admin",
  },

  // {
  //   path: "/videos",
  //   name: "Videos",
  //   icon: <FaVideo color="inherit" />,
  //   component: Videos,
  //   layout: "/admin",
  // },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    icon: <FaStar color="inherit" />,
    component: Subscriptions,
    layout: "/admin",
  },

  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        component: Profile,
        layout: "/admin",
      },
      // {
      //   path: "/signin",
      //   name: "Sign In",
      //   icon: <DocumentIcon color="inherit" />,
      //   component: SignIn,
      //   layout: "/auth",
      // },
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   icon: <RocketIcon color="inherit" />,
      //   component: SignUp,
      //   layout: "/auth",
      // },
    ],
  },
];
export default dashRoutes;
