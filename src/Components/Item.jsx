import React, { useContext, useState } from 'react'
import data from '../PhoneID.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../Context/UserContext';
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
function Item(props) {
    const [count, setcount] = useState(1);
    const { cartitems, setcartitems } = useContext(UserContext)
    const id = props.id;
    const url = data[id].link;
    const name = data[id].name;
    const price = data[id].price;
    let x = cartitems;
    function increase() {
        if (count <= 5)
            setcount(count + 1);
    }
    function decrease() {
        if (count > 1)
            setcount(count - 1);
    }
    function removefromcart() {   
        const ind = x.indexOf(id);
        x.splice(ind, 1);
        document.querySelector(`#${id}`).classList.add("cartlist");
    }
    window.addEventListener('unload',()=>{setcartitems(x)});
    return (
        <tr id={id}>
            <td className='items-center justify-center'>

                <img src={url} alt="" className=' h-24 w-18 ml-auto mr-auto' />

            </td>
            <td className='text-center phonename font-medium'>{name}</td>
            <td className='text-center phonename font-medium'>&#8377;{price}</td>
            <td className='text-center phonename font-medium'>
                <FontAwesomeIcon icon={faMinus} className='mx-1 border-2 p-1 border-black text-black hover:text-gray-600 hover:cursor-pointer' onClick={decrease} />
                <span className='text-2xl font-semibold'> {count}</span>
                <FontAwesomeIcon icon={faPlus} className='mx-1 border-2 p-1 border-black text-black hover:text-gray-600 hover:cursor-pointer' onClick={increase} />
            </td>
            <td className='text-center phonename font-medium'>
                <FontAwesomeIcon icon={faTrash} size='lg' className=' text-yellow-900 hover:text-gray-600 hover:cursor-pointer' onClick={removefromcart} />
            </td>
        </tr>

    )
}

export default Item