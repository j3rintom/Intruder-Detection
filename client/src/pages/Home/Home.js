import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import Navbar2 from "../../component/Navbar2/Navbar2"
import LoadingComponent from "../../component/LoadingComponent/LoadingComponent"
const Home = ({isArmed,setIsArmed}) => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    document.title = "Home"
    // axios.get("http://localhost:8080/recognize",{isArmed:isArmed}).then((response)=>{
    //   setLoading(false)
    //   console.log(response);
    // }).catch((err)=>{
    //   console.log(err);
    // }).finally(()=>{
    // })

    startCamera()

  },[])
  const startCamera = async ()=>{
    const options = {
      method: 'POST',
      body: JSON.stringify({ isArmed:isArmed }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('http://localhost:8080/recognize', options)
    console.log(response);
    setLoading(false)
  }
  return (
    <>
      <Navbar2 />
      <div className='home-container'>
        {loading?<LoadingComponent />:<h1>Your Surveillance Window is opened as a pop-up.</h1>}
      </div>
    </>
  )
}

export default Home
