import React, { useRef, useState } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Product from './Product';
function WelcomePage() {
    const { user, setUser, setpass } = useContext(UserContext);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const display = useRef();
    const welcpage = useRef();
    const navigate = useNavigate();

    function handleuser(e) {
        setusername(e.target.value);
    }

    function handlepassword(e) {
        setpassword(e.target.value)
    }
    function handlesubmit() {
        if (password == "" || username == "") {
            display.current.innerHTML = "*Mandatory fields can't be empty"
        }
        else {
            setUser(username)
            setpass(password)
            navigate("/product", { replace: true })
        }
    }


    return (

        <div ref={welcpage} className='flex justify-center items-center w-screen  max-w-screen max-h-screen h-screen bg-gray-900 fixed top-0'>
            <div className=' flex w-auto h-auto  text-white flex-col border-2 border-white p-10 rounded-lg bg-black'>
                <h3 className='text-center text-2xl font-semibold'>Welcome to your own Phone shop</h3>
                <div className='flex-col items-center justify-center flex m-5 p-5'>
                    <div className='my-2'>
                        <h6 className='mb-1 font-thin'>UserName</h6>
                        <input type="text" placeholder='username' className='rounded-md text-black px-3 py-1' onChange={handleuser} />
                    </div>
                    <div>
                        <h6 className='mb-1 font-thin'>Password</h6>
                        <input type="text" placeholder='password' className='rounded-md text-black px-3 py-1' onChange={setpassword} />
                    </div>
                    <div className='relative top-10'>

                        <button type="submit" className='border-2 py-1 px-2 rounded-lg bg-blue-500 hover:bg-gray-600' onClick={handlesubmit}>Submit</button>

                    </div>
                </div>
                <div ref={display} className='text-center text-red-500 mt-2'></div>
            </div>
        </div>
    )
}

export default WelcomePage