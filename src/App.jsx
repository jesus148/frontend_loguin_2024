// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Loguin from './Components/Loguin/Loguin';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Interfaz from '../src/Components/Interfaz/Interfaz';



function App() {


  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')


  return (

    <div className='app w-full h-full'>


      {/* <Loguin/>
 */}

{/* con el router puedes cambiar de componentes  */}
<BrowserRouter>
        <Routes>

          <Route path="/" element={<Loguin setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>






    </div>
  
  )
}

export default App
