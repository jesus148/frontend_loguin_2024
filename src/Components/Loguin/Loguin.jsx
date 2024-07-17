
import React  , {useState} from 'react' ;
import  './Loguin.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



function Loguin() {


  const [action , setAction] = useState("Registrarse");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
              {action}
        </div>
         <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <div className='icon'>
        <FaUser />
          </div>
          <input type="text" placeholder='name' />

        </div>
        <div className='input'>
          <div className='icon'>

        <RiLockPasswordFill />
          </div>
          <input type="password" placeholder='contraseña'/> 
        </div>

      </div>
      <div className='forgot-password'>Olvido Contraseña</div>
      <div className='submit-container'>
        <div className={action==="Sign Up"?"submit gray":"submit"}  onclick={()=>{setAction("Sign Up")}}>Registrarse</div>


        <div className={action==="Loguin"?"submit gray":"submit"} onclick={()=>{setAction("Loguin")}}>Entrar</div>
      </div>

    </div>
  )
}

export default Loguin;