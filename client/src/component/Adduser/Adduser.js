import React,{useState} from 'react'
import "./Adduser.css"
import {UserAuth} from "../../context/AuthContext"
const Adduser = ({onNewUserAdded}) => {
    const {user} = UserAuth()
    const [name, setName] = useState('');
    const [loading,setLoading] = useState(false)
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      const newUser = { name: name };
      const options = {
        method: 'POST',
        body: JSON.stringify(newUser),
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
                <button className="button-75"  type='submit'><span className="text">Add User</span></button>
            </form>
            {loading&& <h1>Loading...</h1>}
        </div>
    )
}

export default Adduser
