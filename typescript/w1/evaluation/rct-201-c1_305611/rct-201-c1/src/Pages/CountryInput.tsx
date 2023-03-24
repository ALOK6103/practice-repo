import React, { useState } from 'react'
import { CountryType } from './Countries'
interface CountryInputProps{
  addCountryDetails:(data:CountryType)=>void
}
// should receive the addCountryDetails callback function through props
const CountryInput = ({addCountryDetails}:CountryInputProps) => {
  const [countryVal,setCountryVal]=useState<string>("")
  const [capitalVal,setCapitalVal]=useState<string>("")
  // create a form, to take the country, and capital

  const handleCountryChange :React.ChangeEventHandler<HTMLInputElement>=(e)=>{
   
    setCountryVal(e.target.value)
 }

  const handleCapitalChange :React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    
    setCapitalVal(e.target.value)
   }
  
  //  when the user clicks on the Add Country Data button
  //  call the addCountryDetails function, inside this.

  const handleSubmit:React.MouseEventHandler<HTMLButtonElement> = () => {
    
    addCountryDetails({
      id:Date.now(),
      name:countryVal,
      capital:capitalVal
    })
  }


  return (
    <div>
      <form >
      Country  <input placeholder='Enter Country' value={countryVal} onChange={handleCountryChange}></input>
      Capital  <input placeholder='Enter Capital' value={capitalVal} onChange={handleCapitalChange}></input>
        <button onClick={handleSubmit}>Add Country Data</button>
      </form>
    </div>
  )
}

export default CountryInput
