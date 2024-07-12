import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse";
import Signin from "./Signin";
const Body = () => {

  const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Signin/>
    },
    {
        path:'/browse',
        element:<Browse/>
    },
  ]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
}

export default Body