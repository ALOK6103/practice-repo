import React,{useState} from 'react'
import { LoginType } from './Countries'
interface LoginFormProps{
    handleSubmit:(arg:LoginType)=>void
}
// should receive the handleSubmit callback function through props
const LoginForm = ({handleSubmit}:LoginFormProps) => {
  // create a form, to take the user email, and password
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")

  const handleEmailChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  //  when the user clicks on the Sign In button
  //  call the handleSubmit function, inside this.
  const handleClick = () => {
    handleSubmit({
      email:email,
      password:password
    })
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login Form</h1>
      
      <form>
      <input placeholder='Email' value={email} onChange={handleEmailChange}></input>
      <input placeholder='Password' value={password} onChange={handlePasswordChange}></input>
      <button onClick={handleClick}>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
