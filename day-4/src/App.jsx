import { useState } from "react"

function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [success, setSuccess] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const login = () =>{
    // validate email and password
    if(email === "admin@example.com" && password === "password"){
      setSuccess("sucess")
    }else{
      setSuccess("not sucess")
    }
  }
  return (
    <>
      <div className="border p-5 m-auto mt-10 w-1/4 max-sm:w-[80%] bg-white rounded-lg border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2 text-center">Login</h2>
        <div className={`${success == "sucess"?"text-green-500 bg-green-100": success == "not sucess"? "text-red-500 bg-red-100":"text-gray-500"} p-2 w-full mt-2 mb-2`}>{success ? success :"Welcome to our page"}</div>
        {/* the inputs */}
        <label htmlFor="" className="text-gray-500">Email</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border border-gray-300 mb-2 outline-none rounded-md" placeholder="Enter Your email" />
        <label htmlFor="" className="text-gray-500">Password</label>
        <input type={`${showPassword  ?"text":"password"}`} onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 border border-gray-300 mb-2 outline-none rounded-md" placeholder="Enter Your password" />
        {/* the buttons */}
        <input type="checkbox" onChange={()=>setShowPassword(!showPassword)} />
        <label htmlFor=""  className="text-gray-500"> Show Password </label>
        {/** Button */}
        <button onClick={login} className="bg-blue-300 p-1 hover:bg-blue-500 w-full mt-2 text-white rounded-md cursor-pointer">Login</button>
      </div>
    </>
  )
}

export default App
