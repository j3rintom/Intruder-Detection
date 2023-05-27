import React, { useEffect, useState } from 'react';
import './Dataset.css';
import axios from 'axios';
import { UserAuth } from '../../context/AuthContext';
import Navbar2 from '../../component/Navbar2/Navbar2';
import Adduser from '../../component/Adduser/Adduser';
import Card from '../../component/Card/Card';

const Dataset = () => {
  const [friends, setFriends] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  useEffect(()=>{
    document.title= "Dataset"
  },[])
  useEffect(() => {
    fetchFriends();
  }, [user.uid]);

  const fetchFriends = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/friend/${user.uid}`);
      setFriends(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewUserAdded = () => {
    fetchFriends();
  };

  const handleUserDeleted = () => {
    fetchFriends();
  };

  return (
    <>
      <Navbar2 />
      <div className='dataset-container'>
        <Adduser onNewUserAdded={handleNewUserAdded} />
        <div className='user-container'>
          {loading ? (
            <h1>Loading...</h1>
          ) : friends === null ? (
            <h1>No user added</h1>
          ) : (
            friends.map((friend) => (
              <Card
                key={friend._id}
                id={friend._id}
                name={friend.name}
                onUserDeleted={handleUserDeleted}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Dataset;
