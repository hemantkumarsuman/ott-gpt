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

  //After user is created we need to push user information in appStore
  //This is the logic for when user is signIn or SignOut
  
  

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
}

export default Body