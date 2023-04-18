import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <label>
        Username:
        <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} className="loginInput" />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="loginInput" />
      </label>
      <button className='LoginBtn' type="submit">Login</button>
    </form>
  );
}
export default LoginForm;


