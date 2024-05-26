import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { SERVER_LINK } from "../constants";



function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const data = {
        name:name,
        email:email,
        password:password
    }
    const handleSubmit = async(e) =>{
      e.preventDefault()
      try {
        const response = await fetch(`${SERVER_LINK}/signup`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
      const responseData = await response.json();
      console.log("response data - ",responseData);
      if (response.ok && responseData.message === "user added") {
        console.log('Success:', responseData);
        navigate('/'); // Navigate to the login page on success
      } else {
        console.error('Error:', response.statusText);
      }
      } catch (error) {
        navigate('/signup')
      }
       
    }
  return (
    <div className="flex justify-center p-44">
      <div className="w-6/12 h-3/6 border border-gray-400 rounded-lg p-3">
        <form onSubmit={handleSubmit}>
      <input
          type="text"
          className="border border-gray-600 p-2 mb-4 mt-5 rounded-lg w-full"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          placeholder="Name"
        />
        <input
          type="email"
          className="border border-gray-600 p-2 mb-4 mt-5 rounded-lg w-full"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder="email address"
        />
        <input
          type="password"
          className="border border-gray-600 p-2 mb-4 mt-5 rounded-lg w-full"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder="password"
        />
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-3 px-8 mb-4 rounded-lg flex justify-center items-center">
            Sign up
          </button>
        </div>
        </form>
        <p className="flex justify-center">Already have an account?<span className="text-blue-500 ml-2"><Link to="/"> Login</Link></span></p>

      </div>
    </div>
  );
}

export default Signup
