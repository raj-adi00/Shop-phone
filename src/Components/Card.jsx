import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function Card(props) {
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
    return (
        <div className='flex flex-col justify-center items-center bg-white mx-auto border-2 border-white shadow-lg rounded-md hover:cursor-pointer card' id={id} onMouseEnter={showcart} onMouseLeave={hidecart}>
            <div className='imgboundary h-72 w-80 overflow-hidden p-1 my-8'>
                <FontAwesomeIcon icon={faCartShopping} size='xl' className='mx-3 relative bottom-1 addcart text-black hover:text-gray-600' />
                <img src={url} alt="" className='images aspect-square h-72 w-72 mx-auto' />
            </div>
            <div className='flex w-full justify-around details'>
                <div className='text-center font-medium text-lg phonename py-2 text-blue-900'>{name}</div>
                <div className='text-center font-medium text-lg phonename py-2 text-black'>&#8377; {price}</div>
            </div>
        </div>
    )
}

export default Card