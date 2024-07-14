import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Browse from "./Browse";
import Signin from "./Signin";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();

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
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const {uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } 
      else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
}

export default Body