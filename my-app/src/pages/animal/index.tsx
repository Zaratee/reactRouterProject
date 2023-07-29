import React from 'react'

import { useParams } from "react-router-dom";


const Animal = () => {
    let { animalType } = useParams();

    return (
        <div className='w-full h-full flex items-center justify-center '>
            <img src={`/${animalType}.jpg`} className=' h-[200px]' />
        </div>
    )
}

export default Animal