import React, { useEffect } from 'react'
import data from '../Details.json'
import Card from './Card'

function List() {
    var ind=0;
    return (
        <div className='flex flex-wrap p-5 my-16 gap-x-8  gap-y-20'>
            {
                Object.keys(data).map((key) => {
                    return data[key].map((value) => {
                        return <Card key={ind++} obj={value} />
                    })
                })
            }
        </div>
    )
}

export default List