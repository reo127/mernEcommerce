import React from 'react'
import image from "../assets/images/1.jpg";

const Catagory = () => {
    return (
        <div>
            <div className="flex items-center justify-around flex-wrap shadow-lg">
                <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' />
                <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' />
                <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' />
                <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' />
                <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' />
            </div>
        </div>
    )
}

export default Catagory