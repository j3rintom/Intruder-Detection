import React, { useEffect, useState } from 'react';
import "./Home.css";
import axios from "axios";
import Navbar2 from "../../component/Navbar2/Navbar2";
import { UserAuth } from '../../context/AuthContext';

const Home = ({isArmed,setIsArmed}) => {
  const { user } = UserAuth();
  const [userInitialized, setUserInitialized] = useState(false);

  useEffect(() => {
    document.title = "Home";
    setUserInitialized(true);
  }, []);
  useEffect(()=>{
    axios.get(`http://localhost:5000/arm/${user.uid}`).then((response)=>{
      setIsArmed(response.data.armed)
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
        {/* Your home content */}
      </div>
    </>
  );
};

export default Home;
