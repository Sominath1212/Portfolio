import React, { useState } from 'react'

export default function Cart(props) {




    const [hidden, setHidden] = useState(false);


    return (
        <>
            <div
                className="relative w-36 h-44 border-[0.5px] hover:scale-110 duration-300 rounded-lg shadow-lg overflow-hidden mx-auto"
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => setHidden(true)}
            >
                <img src={props.image} alt="Product" className="h-2/3 object-cover m-auto p-1" />
                <div className="p-2 text-center">
                    <h3 className="text-xl font-semibold">{props.name}</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gray-200 h-2">
                    <div
                        className={`h-2 bg-green-500 transition-all duration-500 ease-in-out transform ${!hidden ? 'opacity-100' : 'opacity-0'}`}
                        style={{ width: hidden ? '0%' : `${props.percentage}%` }}
                    >
                    </div>
                </div>
            </div>


        </>

    )
}
