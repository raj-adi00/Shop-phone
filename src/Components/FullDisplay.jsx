import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../Context/UserContext';
function FullDisplay(props) {
    const { setcurrentopen, currentopen } = useContext(UserContext)
    // console.log(props.specification)
    const data = props.specification;
    function closedisplay() {
        currentopen.querySelector(".fulldescription").style.transform = "scale(0)"
        setcurrentopen(null)
    }
    return (
        <div className='m-auto show w-full flex flex-col items-center gap-8 hover:cursor-auto overflow-y-auto no-scrollbar'>
            <div className='absolute right-2 top-2'><FontAwesomeIcon icon={faXmark} onClick={closedisplay} className='hover:text-red-800' /> </div>
            <div className='w-1/3 h-1/3 mx-auto'>
                <img src={data.link} alt="" className='mx-auto' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h4 className=' my-3 text-center text-xl font-semibold phonename text-blue-900'>{data.name}</h4>
                <button className='phonename border-2 bg-yellow-500 p-2 rounded-lg'>Buy   &#8377;{data.price}</button>
                <button className=' my-1 phonename border-2 bg-yellow-500 p-2 rounded-lg'>Add to Cart</button>
            </div>
            <div>
                <h6 className='font-semibold'>Features:</h6>
                <ul>
                    {
                        data.feature.map((ele) => { return <li>{ele}</li> })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FullDisplay