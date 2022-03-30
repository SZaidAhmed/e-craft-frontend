import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/autActions';

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const submitForm = () => {
    login({
      email,
      password
    }, dispatch)
    console.log("first")
  }

  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'></input>
      <input value={password} onChange={(e) => setPass(e.target.value)} placeholder='password'></input>
      <button onClick={submitForm}>Login</button>
    </>
  )
}

export default Home