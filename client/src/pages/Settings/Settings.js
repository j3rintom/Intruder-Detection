import React, { useEffect,useState } from 'react'
import "./Settings.css"
import Navbar2 from "../../component/Navbar2/Navbar2"
import axios from "axios"
import { UserAuth } from '../../context/AuthContext'

const Settings = () => {
  const [loading,setLoading] = useState(false)
  const {user} = UserAuth()
  const[isArmed,setIsArmed] = useState()
  useEffect(()=>{
    document.title = "Settings"
    
  },[])
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/arm/${user.uid}`).then((response)=>{
      setIsArmed(response.data.armed)
      setLoading(false)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  
  const handleClick = () => {
    setLoading(true)
    axios.patch(`http://localhost:5000/arm/${user.uid}`,{armed:!isArmed}).then((docs)=>{
      setLoading(false)
    }).catch(err=>console.log(err))
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
        {loading?'Loading...'  :isArmed ? 'Armed' : 'Disarmed'}
      </button>
      <h1>Click the Button to {isArmed?"Disarm":"Arm"} the Alert System</h1>
    </div>
    </>
  )
}

export default Settings
