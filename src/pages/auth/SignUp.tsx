import React, { useState } from 'react';
import { useAuth } from '../../processes/auth/useAuth';

const SignUp = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username);
    signup(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="username" value={username} onChange={(e) => setusername(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
};
export default SignUp;
