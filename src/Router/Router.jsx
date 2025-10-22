import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ToyDetails from "../pages/ToyDetails";





export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/myProfile',
                Component: MyProfile,
            },
           
            {
                path: '/signup',
                Component: Signup,
            },
            {
                path: '/signin',
                Component: Signin,
            },
            {
                path: '/toyDetails',
                Component: ToyDetails,
            },
            

        ]
    }
])