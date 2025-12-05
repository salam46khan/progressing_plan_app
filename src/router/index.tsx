import App from "@/App";
import AddPlan from "@/Pages/addPlan/AddPlan";
import Home from "@/Pages/home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/add',
                Component: AddPlan
            }
        ]
    }
])