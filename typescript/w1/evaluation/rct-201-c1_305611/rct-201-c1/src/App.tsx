import React,{useState} from 'react'
import Countries, { LoginType } from './Pages/Countries'
import LoginForm from './Pages/LoginForm'

function App() {
  //have a local state management to store the user authenticated status
  const [auth,setAuth]=useState(false)

  //it should email and password, both of type string as parameters
  const handleSubmit = () => {
     setAuth(true)
  }

  // Render LoginForm page if the user is NOT authenticated, else render Countries page
  // handleSubmit should be passed as a prop to the LoginForm page
  return (<>
  <LoginForm handleSubmit={handleSubmit} /> 
 <Countries /> 
 
 
  
  </>)
}

export default App
