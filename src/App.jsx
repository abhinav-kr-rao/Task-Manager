import React from "react";
import './App.css'
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();
  const handleSucces = () => {

    navigate("/home");
  }
  return (
    <div>
      <GoogleLogin
        onSuccess={handleSucces}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
    </div>
  )
}

export default App

