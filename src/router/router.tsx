import { createBrowserRouter, RouteObject } from "react-router-dom";
import { About } from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";

const routes: RouteObject[] = [
    {
        element: <Home />,
        path: "/"
    },
    {
        element: <ErrorPage />,
        path: "/404"
    },
    {
        element: <About />,
        path: "/about"
    },
    {
        element: <PrivacyPolicy />,
        path: "/privacy-policy"
    }
];

export const router = createBrowserRouter(routes);
