import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import AllToys from "../components/pages/AllToys/AllToys";
import ToyDetails from "../components/pages/ToyDetails/ToyDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path:'/details/:id',
                element:<ToyDetails></ToyDetails>,
                loader:({params})=>fetch(`http://localhost:5000/allToys/${params.id}`)
            }
        ]
    }
])
export default router