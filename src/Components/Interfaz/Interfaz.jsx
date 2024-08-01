
import React from 'react'
import { useNavigate } from 'react-router-dom'

const  Interfaz = (props) => {


  const {loggedIn , email}= props;


  const navigate = useNavigate()

  const onButtonClick  = () =>{

  }




  return (
   
    <div className="mainContainer bg-red-700 flex 
     justify-center align-middle " >
      <div className={'titleContainer'}>
        <div>Bienvenido!</div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}




export default Interfaz;