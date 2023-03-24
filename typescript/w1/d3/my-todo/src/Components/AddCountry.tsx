import React, { useState } from 'react'

interface AddCountryProp{
    onAddCountry:(country:string)=>void
}

const AddCountry = ({onAddCountry}:AddCountryProp) => {
    const [countryVal,setCountryVal]=useState<string>("")

    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{

        setCountryVal(e.target.value)
    }

    const handleClick=()=>{
        onAddCountry(countryVal)
    }
  return (
    <div>
        <input   placeholder='Add country' value={countryVal}  onChange={handleChange} />
        <button onClick={handleClick} >Add Country</button>
    </div>
  )
}

export default AddCountry