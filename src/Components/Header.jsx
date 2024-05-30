import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import UserContext from '../Context/UserContext'
function Header() {
    const { user } = useContext(UserContext)
    // console.log(user)
    return (
        <div>
            <ul className='flex bg-blue-950 py-3 justify-between px-10 w-screen'>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-orange-700 invert' : ''}`}><FontAwesomeIcon icon={faPhone} size='lg' className='hover:cursor-pointer invert' /></NavLink></li>
                <li ><NavLink to='/product' className={({ isActive }) => `font-semibold text-xl hover:cursor-pointer nav-item ${isActive ? 'text-orange-700' : 'text-white'}`}>Products</NavLink></li>
                <li><NavLink to='/cart' className={({ isActive }) => `font-semibold text-xl hover:cursor-pointer nav-item  ${isActive ? 'text-orange-700' : 'text-white'}`}>Cart</NavLink></li>
                <li><NavLink to='/profile' className={({ isActive }) => `${isActive ? 'text-orange-700 ' : 'text-white'}`}><FontAwesomeIcon icon={faUser} size='lg' className='hover:cursor-pointer mx-2' />{user}</NavLink></li>
            </ul>
        </div>
    )
}

export default Header