import {  Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./firebase/protected";
import './App.css';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Dataset from "./pages/Dataset/Dataset"
import axios from "axios"
import Settings from "./pages/Settings/Settings"
import { useEffect, useState } from "react";
export default function App() {
  const [isArmed,setIsArmed] = useState(false)
  
  return (<div>
  <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Protected><Home isArmed={isArmed} setIsArmed={setIsArmed}/></Protected>} />
        <Route path="/dataset" element={<Protected><Dataset /></Protected>} />
        <Route path="/settings" element={<Protected><Settings isArmed={isArmed} setIsArmed={setIsArmed}/></Protected>} />
      </Routes>
  </AuthContextProvider>
  </div>
  );
}