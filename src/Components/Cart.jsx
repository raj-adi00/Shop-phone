import React, { useContext } from 'react'
import Header from './Header'
import Item from './Item'
import UserContext from '../Context/UserContext'
import info from '../PhoneID.json'

function Cart() {
  const { cartitems, setcartitems } = useContext(UserContext);
  var ind = 0;
  return (
    <div>
      <Header />
      <table className='w-screen'>
        <thead>
          <tr className='font-semibold phonename text-xl text-gray-500'>
            <th>PRODUCT</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COUNT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody className='w-screen items-center'>
          {
            cartitems.map((id) => {
              return <Item key={ind++} id={id} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cart