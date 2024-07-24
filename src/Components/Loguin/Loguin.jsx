
import React  , {useState} from 'react' ;
import  './Loguin.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



function Loguin() {


  const [action , setAction] = useState("LOG IN");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text text-3xl text-orange-50 flex justify-start text-whiteTwo font-extrabold'>
              {action}
        </div>
         <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input flex columns-2 '>
          <div className='icon w-1/6'>
        <FaUser />
          </div>
          <div className='w-5/6' >
          <input type="text" placeholder='Usuario' className='bg-[#3e4957]  border-b border-yellow-400' />

          </div>

        </div>
        <div className='input columns-2 flex'>  
          <div className='icon w-1/6'>

        <RiLockPasswordFill />
          </div>
          <div className='w-5/6'>
            <input type="password" placeholder='Contraseña' className='bg-[#3e4957]  border-b
            border-yellow-400'/> 

          </div>
        </div>

      </div>
    
      
      <div className='submit-container flex flex-row justify-evenly'>
        <button className={action==="LOG IN"?"submit gray rounded-full":"submit" } 
         
        onclick={()=>{setAction("Sign Up")}}>Registrarse</button>


        <button className={action==="Sign Up"?"submit gray rounded-full":"submit rounded-full"} onclick={()=>{setAction("Loguin")}}>Entrar</button>
      </div>


      <div className='forgot-passwor flex justify-center m-5 text-white gap-1 font-semibold'>Olvido Contraseña <a href="" className='text-blue-200'> Aqui</a> </div>

    </div>
  )
}

export default Loguin;