import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className="absolute px-8 py-2 z-10 w-screen flex justify-between h-20 w-screen bg-gray-600">
        <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EcEdLx94xl-Yw1qll4jQd8xEUTEDaEY5-w&s" 
        alt="logo"/>

        <div className="flex justify-between">
          <img alt="userIcon" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" 
          className="h-10 m-4"/>
          <button className="m-2 p-2 text-xl text-white" onClick={handleSignOut}>signout</button>
        </div>
    </div>

    
  )
}

export default Header