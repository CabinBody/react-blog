import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../pages/Layout";


const Router = createBrowserRouter([
    {
        index:true,
        element:<Login></Login>
    },
    {
        path:'/layout',
        element:<Layout></Layout>
    },
    {
        path:'/*',
        element:<div>Error Page</div>

    }
])

export default Router