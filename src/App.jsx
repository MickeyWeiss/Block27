import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate.jsx'
import SignUpForm from './components/SignUpForm.jsx'

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
    <signUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App
