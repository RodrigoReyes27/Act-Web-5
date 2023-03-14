import React, { useRef } from 'react'
import Input from "./Input"
import arcaLogo from "./arca-logo.png"
import Button from './Button';

function Login() {
    const mailRef = useRef(null);
    const passwordRef = useRef(null);
    
    function login(ev) {
        ev.preventDefault();
    }
    
    return (
        <div className="container mx-auto grow pt-8">
            <img src={arcaLogo} alt="logo-arca" className="mx-auto w-1/5 min-w-[160px] max-w-[200px]"/>
            <h1 className="text-4xl min-[400px]:text-5xl text-center tracking-tighter leading-13 font-bold mx-auto w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] xl:w-[25%]">Arca Continental</h1>
            <form className='mx-auto pt-7 md:pt-10 w-[90%] md:w-[75%] max-w-[35rem]'>
                <Input 
                    name={"Correo"} 
                    type={"mail"} 
                    icon={"fa-regular fa-envelope"} 
                    ref={mailRef}
                    label={false}
                />
                <Input
                    name={"Contraseña"} 
                    type={"password"} 
                    icon={"fa-solid fa-lock"} 
                    ref={passwordRef}
                    label={false}
                />
                <button className='block text-lg font-semibold ml-auto py-3 mb-4 md:mb-6' type='button'>Olvidé mi contraseña</button>
                <Button text={"Iniciar Sesión"} type={"btn-primary"} handleClick={login}/>
            </form>
        </div>
    )
}

export default Login