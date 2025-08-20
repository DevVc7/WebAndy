import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/dashboard/page"
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/auth/login/page";


export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      }
    ],
  },
]);
