import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') {
      console.log("Logging in as Admin");
      onLogin({ id: 1, name: 'Admin', role: 'admin' });
    } else {
      console.log("Logging in as Owner");
      onLogin({ id: 2, name: 'Owner', role: 'owner' });
    }
    navigate('/tasks'); // Navigate to tasks route after login
  };

  return (
    <div className="container text-center mt-5">
      <h2>Please log in</h2>
      <button className="btn btn-primary" onClick={() => handleLogin('admin')}>Login as Admin</button>
      <button className="btn btn-secondary mx-2" onClick={() => handleLogin('owner')}>Login as Owner</button>
    </div>
  );
};

export default Login;