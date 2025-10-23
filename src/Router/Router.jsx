import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ToyDetails from "../pages/ToyDetails";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ResetPassword";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
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
                path: '/forgotPassword',
                Component: ForgetPassword,
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoute>
                    <ToyDetails></ToyDetails>
                </PrivateRoute>,
            },
        ]
    }
])