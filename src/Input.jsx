import React, { forwardRef, useState } from 'react'

const Input = (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <label htmlFor={props.name} className={`text-lg md:text-xl font-semibold inline-block pt-2 md:pt-6 ${!props.label && "sr-only"}`}>{props.name}</label>
            <div className="relative py-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className={`${props.icon} text-gray-500`}></i>
                </div>
                <input
                    type={showPassword ? "text" : props.type}
                    id={props.name} 
                    placeholder={props.name} 
                    // required
                    ref={ref}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-xl bg-gray-100 border-solid border-2 border-transparent focus:border-arcaRed-500 outline outline-transparent" 
                />
                {
                    props.type === "password" &&
                    <div 
                        className="absolute inset-y-0 right-2.5 flex items-center cursor-pointer px-4"
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        <i className={`fa-regular fa-eye${showPassword ? "-slash" : ""} text-gray-500`}></i>
                    </div>
                }
            </div>
        </>
    )
}

export default forwardRef(Input)