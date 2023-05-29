import React, { useEffect, useState } from 'react'
import "./Home.css"
import Navbar2 from "../../component/Navbar2/Navbar2"
import axios from "axios"
import { UserAuth } from '../../context/AuthContext'
import LoadingComponent from "../../component/LoadingComponent/LoadingComponent"
const Home = () => {
  const [userInitialized,setUserInitialized] = useState(false)
  const [isArmed,setIsArmed] = useState(null)
  const [loading,setLoading] = useState(true)
  const {user} = UserAuth()
  useEffect(()=>{
    document.title = "Home"
    setUserInitialized(true)
    
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
  useEffect(()=>{
    axios.get(`http://localhost:5000/arm/${user.uid}`).then((response)=>{
      setIsArmed(response.data[0].armed)
      startCamera()
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  useEffect(() => {
    if (userInitialized && user) {
      const id = user.uid;
      console.log(id);
      axios.post(`http://localhost:5000/arm/${id}`)
        .then((docs) => {
          console.log(docs);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, userInitialized]);

  return (
    <>
      <Navbar2 />
      <div className='home-container'>
      {loading?<LoadingComponent />:<h1>Your Surveillance Window is opened as a pop-up.</h1>}
      </div>
    </>
  );
};

export default Home;
