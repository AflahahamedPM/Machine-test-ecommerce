import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { SERVER_LINK } from "../constants";

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("")
        const navigate = useNavigate()
      
        const data = {
          email:email,
          password:password
        }
      
        const handleLoginSubmit = async(e)=>{
          e.preventDefault()
          try {
            const response = await fetch(`${SERVER_LINK}/login`,{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(data)
            })
            const responseData = await response.json()
            localStorage.setItem("user", JSON.stringify(responseData));
            if(response.ok && responseData.message === "succesfully logged in"){
              navigate("/home")
            }
          } catch (error) {
            console.error(error)
          }
        }
      
      
        return (
          <div className="flex justify-center p-44">
            <div className="w-6/12 h-3/6 border border-gray-400 rounded-lg p-3">
              <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                className="border border-gray-600 p-2 mb-4 rounded-lg w-full"
                placeholder="email address"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <input
                type="password"
                className="border border-gray-600 p-2 mb-4 rounded-lg w-full"
                placeholder="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <div className="flex justify-center"> 
                <button className="bg-blue-600 hover:bg-blue-700 p-3 px-8 mb-4 rounded-lg flex justify-center items-center">
                  Login
                </button>
              </div>
              </form>
              <p className="flex justify-center">Don't have an account?<span className="text-blue-500 ml-2"><Link to="/signup"> Signup</Link></span></p>
            </div>
          </div>
    )
}

export default Login