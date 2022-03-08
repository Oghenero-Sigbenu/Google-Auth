import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import "../styles/Login.css";

const clientId = "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  function Login() {
  const navigate = useNavigate();
  
    const onSuccess = (res) => {
        sessionStorage.setItem('isLoggedIn', true);
        sessionStorage.setItem('userData', JSON.stringify(res));
        navigate("/profile");
  };

  const onFailure = (res) => {
    navigate("/login")
  };
 
  return (
    <div className='login-form'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google "
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;