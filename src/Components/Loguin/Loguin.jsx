
import React  , {useState} from 'react' ;
import  './Loguin.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



function Loguin() {


  const [action , setAction] = useState("LOG IN");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text text-xl text-orange-50 flex justify-start'>
              {action}
        </div>
         <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input flex columns-2'>
          <div className='icon w-1/6'>
        <FaUser />
          </div>
          <div className='w-5/6' >
          <input type="text" placeholder='tu usuario' className='bg-[#3e4957]' />

          </div>

        </div>
        <div className='input columns-2 flex'>  
          <div className='icon w-1/6'>

        <RiLockPasswordFill />
          </div>
          <div className='w-5/6'>
            <input type="password" placeholder='Contraseña' className='bg-[#3e4957]  border-b-4'/> 

          </div>
        </div>

      </div>
      <div className='forgot-password '>Olvido Contraseña</div>
      <div className='submit-container flex flex-row justify-around'>
        <div className={action==="Sign Up"?"submit gray":"submit"}  onclick={()=>{setAction("Sign Up")}}>Registrarse</div>


        <div className={action==="Loguin"?"submit gray":"submit"} onclick={()=>{setAction("Loguin")}}>Entrar</div>
      </div>

    </div>
  )
}

export default Loguin;