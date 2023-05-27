import React, { useEffect } from 'react'
import "./Home.css"
import Navbar2 from "../../component/Navbar2/Navbar2"
const Home = () => {
  useEffect(()=>{
    document.title = "Home"
  },[])
  return (
    <>
      <Navbar2 />
      <div className='home-container'>

      </div>
    </>
  )
}

export default Home
