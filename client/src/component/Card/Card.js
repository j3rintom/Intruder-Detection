import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import './Card.css';

const Card = ({ id, name, onUserDeleted }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/friend/${id}`);
      const options = {
        method: 'POST',
        body: JSON.stringify({ id:id,name:name }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response2 = await fetch('http://localhost:8080/delete_user', options);

      if (response.status === 200&& response2.status===200) {
        // Call the onUserDeleted function prop
        onUserDeleted();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='card'>
      <PersonIcon sx={{ fontSize: 60 }} />
      <h3>{name}</h3>
      <button className='button-82-pushable' onClick={handleDelete}>
        <span className='button-82-shadow'></span>
        <span className='button-82-edge'></span>
        <span className='button-82-front text'>Delete</span>
      </button>
    </div>
  );
};

export default Card;
