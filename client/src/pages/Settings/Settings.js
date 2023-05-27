import React, { useEffect,useState } from 'react'
import "./Settings.css"
import Navbar2 from "../../component/Navbar2/Navbar2"
const Settings = ({isArmed,setIsArmed}) => {
  useEffect(()=>{
    document.title = "Settings"
  },[])
  
  const handleClick = () => {
    setIsArmed(!isArmed);
  };
  return (
    <>
    <Navbar2 />
    <div className='settings-container'>
    <button
        onClick={handleClick}
        style={{
          backgroundColor: isArmed ? '#b30000' : 'black',
          color: 'white',
          padding: '10px',
        }}
      >
        {isArmed ? 'Armed' : 'Disarmed'}
      </button>
      <h1>Click the Button to {isArmed?"Disarm":"Arm"} the Alert System</h1>
    </div>
    </>
  )
}

export default Settings
