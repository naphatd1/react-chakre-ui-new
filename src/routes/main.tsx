import { RouteObject } from "react-router-dom";
import AppContent from "../components/AppContent";
import AboutPage from "../pages/about-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";


const mainRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
        children: [
            {
                path: '/',
                element: <AppContent />,
                
            },
            {
                path: '/register',
                element: <RegisterPage />,
              },
              {
                path: '/login',
                element: <LoginPage />,
              },
              {
                path: '/about',
                element: <AboutPage />,
              },
        ]
      },
]

export default mainRoutes