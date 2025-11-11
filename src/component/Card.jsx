import React from "react";

const Card = (props) => (
    <div className='text-black bg-white shadow-xl rounded-lg hover:scale-105 transition'>
        <div className='w-85 h-55 overflow-hidden p-5'>
            <img src={`/image/${props.image}`} alt={props.name} className='w-full h-full rounded-lg' />
        </div>
        <p className='font-bold text-lg text-center text-gray-700 pb-5'>{props.name}</p>
    </div>
) 

export default Card;