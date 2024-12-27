import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const UserSignup = () => {


  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})


  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })

    
    setFirstname("")
    setLastname("")
    setEmail("")
    setPassword("")
  }




  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-14 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <form action="" onSubmit={submitHandler}>

          <h3 className='text-lg font-medium  mb-6'>What's your name?</h3>
          <div className='flex gap-3  mb-5'>
            <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
              className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-md placeholder:text-sm'
              required
              type="text"
              placeholder='First Name'
            />
            <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 w-1/2 py-2 border text-md placeholder:text-sm'
              required
              type="text"
              placeholder='Last Name'
            />
          </div>

          <h3 className='text-lg  font-medium  mb-2'>What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-md placeholder:text-base'
            required
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-md placeholder:text-base'
            required
            type="password"
            placeholder='Password'
          />
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Login</button>

        </form>
        <p className='text-center font-light mb-3'>Already have an account? <Link to={'/login'} className='text-blue-600 font-normal underline'>Login here</Link></p>
      </div>
      <div>
      <p className='text-xs leading-tight font-extralight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
      </div>

    </div>
  )
}

export default UserSignup