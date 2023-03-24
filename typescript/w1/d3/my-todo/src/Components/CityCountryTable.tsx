import React from 'react'
import { CityCountry } from './Country'

interface CityCountryTableProp{
    data:CityCountry[]
}
const CityCountryTable = ({data}:CityCountryTableProp) => {
  return (
    <div>
        <table>
            <thead>
               <tr>
                <th>S.no</th>
                <th>city</th>
                <th>country</th>
               </tr>
            </thead>

            <tbody>
                {data.map((item,id)=>(
                    <tr key={item.id}>
                        <td>{id+1}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default CityCountryTable