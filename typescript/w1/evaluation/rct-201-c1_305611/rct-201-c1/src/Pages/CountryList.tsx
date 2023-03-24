import React from 'react'
import { CountryType } from './Countries'
interface CountryListProps{
  data:CountryType[]
}
// should receive the countries list data, through the props, to be mapped and rendered
const CountryList = ({data}:CountryListProps) => {
  return (<div>
    {data.map((item)=>(
      <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.capital}</p>
      </div>
    ))}
  </div>)
}

export default CountryList
