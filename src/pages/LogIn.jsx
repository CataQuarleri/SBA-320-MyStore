import React, { useState } from 'react'
import {auth} from '../firebase/config'
import {signInWithEmailAndPassword} from 'firebase/auth'
function LogIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = async()=>{
    try {
      let response = await signInWithEmailAndPassword(auth, email, password)
      console.log("RESPONSE", response)
    } catch (error) {
      console.log("ERROR", error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">email</label>
      <input type="email" onChange={e=>setPassword(e.target.value)}/>
      <label htmlFor="">password</label>
      <input type="password" onChange={e=>setEmail(e.target.value)}/>
      <button type="submit">submit</button>
    </form>
  )
}

export default LogIn