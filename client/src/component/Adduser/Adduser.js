import React, { useEffect, useState } from 'react';
import "./Adduser.css";
import { UserAuth } from "../../context/AuthContext";

const Adduser = ({ onNewUserAdded }) => {
  const { user } = UserAuth();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');
  const [newUser,setNewUser] = useState(null)
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const addUser = async () => {
    if (newUser !== null) {
      setDialogText('Adding User... This may take a few minutes. Come closer to the camera');
      setShowDialog(true);

      const options = {
        method: 'POST',
        body: JSON.stringify({ newUser }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const response = await fetch('http://localhost:8080/add_user', options);
        console.log(response);
        if (response.ok) {
          setDialogText('User added successfully');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    addUser();
  }, [newUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const neww = { name: name };
    const options = {
      method: 'POST',
      body: JSON.stringify(neww),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(`http://localhost:5000/friend/${user.uid}`, options);
      console.log(response);
      if (response.ok) {
        // Call the onNewUserAdded function prop
        onNewUserAdded();
        const data = await response.json();
        setNewUser(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setName('');
  };

  return (
    <div className='add-user'>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder='Name' value={name} onChange={handleNameChange} />
        </label>
        <button className="button-75" type='submit'><span className="text">Add User</span></button>
      </form>
      {loading && <h1>Loading...</h1>}
      {showDialog && (
        <div className="dialog">
          <p>{dialogText}</p>
          {dialogText === 'User added successfully' && (
            <button onClick={() => setShowDialog(false)}>Close</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Adduser;
