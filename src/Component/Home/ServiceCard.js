import React from 'react'

const ServiceCard = ({img , title , desc}) => {
    return (
        <div>
            <div className="card w-full p-2 h-80 justify-between items-start bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 mb-2">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ml-2 items-start text-center">
                    <h2 className="card-title text-start">{title}</h2>
                    <p className='text-left'>{desc}</p>   
                </div>
            </div> 
        </div>

    )
}

export default ServiceCard