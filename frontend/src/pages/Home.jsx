import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1695066584644-5453334ff5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWZmaWMlMjBzaWduYWwlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)]  h-screen pt-5 flex justify-between flex-col w-full">
                <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
                <div className="bg-white py-4 pb-7 px-4">
                    <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home