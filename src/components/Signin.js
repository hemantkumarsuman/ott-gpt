import { useState } from "react"
import Header from "./Header"

const Signin = () => {

    let [isSignIn,setIsSignIn] = useState(true);
    const handleToggleSignIn = ()=>{
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
        <Header/>

        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" alt="background" className=""/>
        </div>

        <form className=" absolute bg-black bg-opacity-80 p-12 text-white w-3/12 my-40 mx-auto right-0 left-0 rounded-lg">
            <h1 className="font-bold text-3xl my-2">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignIn && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full  text-black"/>}
            <input type="text" placeholder="Email Address" className="p-2 my-4 w-full text-black"/>
            <input type="password" placeholder="Password" className="p-2 my-4 w-full  text-black"/>
            <button className="p-4 my-6 w-full bg-red-700 rounded-lg">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <p className="py-6 cursor-pointer" onClick={handleToggleSignIn}>{isSignIn ? 'New to OTT-GPT? Sign Up' : 'Already Registered? Sign In'}</p>
        </form>

        
    </div>
  )
}

export default Signin