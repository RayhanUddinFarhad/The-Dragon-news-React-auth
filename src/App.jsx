import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Header/Navbar'
import LeftSide from './components/Home/LeftSide'
import RightSide from './components/Home/RightSide'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>


        <div>


        <Header/>
        <Navbar></Navbar>
        </div>

        <div className='grid grid-cols-6 mt-5'>


            <LeftSide></LeftSide>

            <div className='col-span-4'>

             <Outlet></Outlet>
            </div>
            

            <div>


              <RightSide></RightSide>
            </div>

            <ToastContainer></ToastContainer>

            

            





        </div>




       </div>
    </>
  )
}

export default App
