import React from 'react';

const Login = ({ onLogin }) => {
  const isLoading = false;

  return (
    <button className="login btn" onClick={() => onLogin()}>
      Login
    </button>
  );
};

export default Login;
