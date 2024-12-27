import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})


  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({
      email:email,
      password:password
    })
    setEmail("")
    setPassword("")
    console.log(userData)
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-14 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <form action="" onSubmit={handleSubmit}>
          <h3 className='text-lg font-medium  mb-2'>What's your email?</h3>

          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            type="email" 
            placeholder='email@example.com' 
          />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            required 
            type="password" 
            placeholder='password' 
          />
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Login</button>

        </form>
        <p className='text-center text-emphasized font-light mb-3'>New here? <Link to={'/signup'} className='text-blue-600 font-normal underline'>Create new account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className='flex justify-center align-center bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as Captain</Link>
      </div>

    </div>
  )
}

export default UserLogin