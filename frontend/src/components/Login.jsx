import axios from 'axios'
import React, { useState } from 'react'
import useNotify from '../hooks/useNotify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const notify = useNotify()

  const onLogin = () => {
    if (!password || !email) {
      notify({ title: 'login or password must not be empty' })
      return
    }

    axios.post('/api/users/login', {
      email,
      password,
    })
  }
  return (
    <div>
      <label htmlFor="email">email</label>
      <input
        name="email"
        onChange={e => setEmail(e.target.value)}
        type="text"
        id="email"
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="text"
        value={password}
        id="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={onLogin}>Login</button>
      <a href="/register">No login? register here</a>
      <a href="/map">map</a>
      <a href="/todos">todos</a>
    </div>
  )
}

export default Login
