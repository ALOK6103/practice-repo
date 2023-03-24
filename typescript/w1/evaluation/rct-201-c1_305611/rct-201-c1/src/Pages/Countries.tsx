import React, { useEffect, useState } from 'react'
import { addCountryDetailsAPI, getCountriesAPI } from '../api'
import CountryInput from './CountryInput'
import CountryList from './CountryList'

export interface CountryType{
  id:number 
  name:string 
  capital:string
}

export interface LoginType{

  email:string 
  password:string
}


// should fetch the countries data, as soon as this component mounts
const Countries = () => {
  const [countriesData,setCountriesData]=useState<CountryType[]>([])
  // have a local state management to store the countries data
useEffect(()=>{

  handleGetData()
},[])

const handleGetData=()=>{
  getCountriesAPI()
  .then(res=>{
    setCountriesData(res)
  })
}
  //should accept the country to be added, as a parameter
  const addCountryDetails = ({id,name,capital}:CountryType) => {
    
     const countryDet:CountryType={
      id,
      name,
      capital
     }

    addCountryDetailsAPI(countryDet)
    .then(res=>{
      handleGetData()
    })
    
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Countries</h1>
      {/* Render CountryInput component, with addCountryDetails function as props */}
      <CountryInput addCountryDetails={addCountryDetails} />
      <CountryList data={countriesData} />

      {/* Render CountryList component, with the countries data as props */}
    </div>
  )
}

export default Countries
