import React, {useEffect} from 'react';
import {  useNavigate } from 'react-router-dom'
import {GoogleButton} from "react-google-button"
import { UserAuth} from '../../context/AuthContext';
import "./Login.css"
import axios from "axios"
import Navbar from '../../component/Navbar/Navbar';
const Login = () => {
    const navigate = useNavigate()
    const {googleSignin,user}  = UserAuth()
    const handleGoogleSignin = async ()=>{
        try {
            await googleSignin();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        document.title = 'Login'
      },[])
    useEffect(()=>{
        if(user != null){
            
            navigate('/home')
        }
    },[user,navigate])
    return(
        <>
        <Navbar />
        <div className='login-container'>
                <h1>Ready to get started?</h1>
                
                <GoogleButton onClick={handleGoogleSignin}/>
                
        </div>
        </>
    )
}
 
export default Login
