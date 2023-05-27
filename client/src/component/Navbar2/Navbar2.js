import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar2.css"
import { UserAuth} from '../../context/AuthContext';
const Navbar2 = () => {
  const {logout,user}  = UserAuth()
  const handleLogout =  async ()=>{
    try {
      await logout();
  } catch (error) {
      console.log(error);
  }
  }
  return (
    <div className='navbar2'>
      <div className="nav-con-1">
        <h1>Intruder Detection</h1>
      </div>
      <div className="nav-con-2">
        <ul>
          <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to="/home" style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "800" : "",
              
            };
          }}>HOME</NavLink></li>
          <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to="/dataset" style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "800" : "",
              
            };
          }}>DATASET</NavLink></li>
          <li> <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to="/settings" style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "800" : "",
              
            };
          }}>SETTINGS</NavLink></li>
          <li><button className="button-24"  onClick={handleLogout}>Logout</button> </li>
          <li><h3 className='username'>{user.displayName}</h3></li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar2
