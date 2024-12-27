import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [captainData, setCaptainData] = useState({})


  // handle submit
  const handleSubmit = (e) => {

    e.preventDefault()

    setCaptainData({
      email: email,
      password: password
    })
    
    setEmail("")
    setPassword("")
    console.log(captainData)
  }


  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-2" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
        <p className='text-center text-emphasized font-light mb-3'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600 font-normal underline'>Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login' className='flex justify-center align-center bg-[#d5622d] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as User</Link>
      </div>

    </div>
  )
}

export default CaptainLogin