import React, { useState } from 'react'
import AddCity from './AddCity';
import AddCountry from './AddCountry';
import CityCountryTable from './CityCountryTable';

export interface CityCountry{
    id:number;
    country:string;
    city:string
}

const Country = () => {
  const [countries,setCountries]=useState<string[]>([])
  const [data,setData]=useState<CityCountry[]>([])
  const handleAddCountry=(country:string)=>{

    setCountries([...countries,country])
  }


  const handleAddCity=(item:CityCountry)=>{

    setData([
      ...data,
      item
    ])
  }
  return (
    <div>
      <AddCountry onAddCountry={handleAddCountry} />
      <AddCity countriesData={countries} onAdd={handleAddCity} />
      <CityCountryTable data={data} />
    </div>
  )
}

export default Country