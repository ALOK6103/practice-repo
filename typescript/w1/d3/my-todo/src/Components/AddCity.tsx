import React, { useState } from 'react'
import { CityCountry } from './Country'

interface AddCityProp{
    onAdd:(data:CityCountry)=>void
    countriesData:string[]
}
const AddCity = ({onAdd,countriesData}:AddCityProp) => {
    const [cityVal,setCityVal]=useState<string>("")
    const [countryOption,setCountryOption]=useState<string>("")

    const handleCityValChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{

        setCityVal(e.target.value)
    }

    const handleCountryChangeOption:React.ChangeEventHandler<HTMLSelectElement>=(e)=>{

      setCountryOption(e.target.value)
    }

    const handleAddCity=()=>{
      onAdd({
        city:cityVal,
        country:countryOption,
        id:Date.now()
      })
    }
  return (
    <div>
        <input placeholder='Enter City' onChange={handleCityValChange}  value={cityVal} />
        <select
        value={countryOption}
        onChange={handleCountryChangeOption}
        >
          <option>Select Option</option>
          {countriesData.map((item)=>(
            <option key={item} value={item} >{item}</option>
          ))}
        </select>
        <button onClick={handleAddCity} >Add City</button>
    </div>
  )
}

export default AddCity