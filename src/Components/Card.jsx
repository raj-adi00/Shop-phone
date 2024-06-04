import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import FullDisplay from './FullDisplay';
import UserContextProvider from '../Context/UserContextProvider';
import UserContext from '../Context/UserContext';

function Card(props) {
    const { currentopen, setcurrentopen, cartitems, setcartitems } = useContext(UserContext)
    // const [incart, setincart] = useState(false);
    const url = props.obj.link;
    const name = props.obj.name;
    const price = props.obj.price;
    const id = props.obj.uid;
    function showcart(e) {
        e.currentTarget.querySelector(".addcart").style.left = '0';
        e.currentTarget.querySelector(".addcart").style.opacity = '1';
    }
    function hidecart(e) {
        e.currentTarget.querySelector(".addcart").style.left = '-100%';
        e.currentTarget.querySelector(".addcart").style.opacity = '0';
    }

    function handleclick(e) {
        if (currentopen == null) {
            e.currentTarget.querySelector(".fulldescription").style.transform = "scale(1)"
            e.currentTarget.querySelector(".fulldescription").style.width = `${(window.innerWidth - window.innerWidth / 2)}px`
            e.currentTarget.querySelector(".fulldescription").style.height = `${window.innerHeight - window.innerHeight / 4}px`
            e.currentTarget.querySelector(".fulldescription").style.top = `${window.innerHeight / 8}px`
            e.currentTarget.querySelector(".fulldescription").style.left = `${window.innerWidth / 5}px`
            setcurrentopen(e.currentTarget)
        }
    }
    return (
        <div className='flex flex-col justify-center items-center bg-white mx-auto border-2 border-white shadow-lg rounded-md hover:cursor-pointer card' id={id} onMouseEnter={showcart} onMouseLeave={hidecart} onClick={handleclick}>
            <div className='fixed scale-0 fulldescription flex justify-center items-center shadow-xl rounded-lg border-gray-500 bg-slate-100 shadow-gray-400'>
                <FullDisplay specification={props.obj} />
            </div>
            <div className='imgboundary h-72 w-80 overflow-hidden p-1 my-8'>
                <FontAwesomeIcon icon={faCartShopping} size='xl' className='mx-3 relative bottom-1 addcart text-black hover:text-gray-600' />
                <img src={url} alt="" className='images aspect-square h-72 w-72 mx-auto' />
            </div>
            <div className='flex w-full justify-around details'>
                <div className='text-center font-medium text-lg phonename py-2 text-blue-900'>{name}</div>
                <div className={  `text-center font-medium text-lg phonename py-2 text-black` }>&#8377; {price}</div>
            </div>
        </div>
    )
}

export default Card