
import React, { useEffect, useState } from 'react'
import CountryCard, { CountryCardProp } from './CountryCard'
import Pagination from './Pagination'
const getData=async(page:number)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`).then((res)=>res.json())
}

const Country = () => {

  const [countryVal,setCountryVal]=useState<CountryCardProp[]>([])
  const [page,setPage]=useState(1)
  useEffect(()=>{

    handleGetData(page)
  },[page])

  const handleGetData=async(page:number)=>{

    return getData(page).then((res)=>{
      setCountryVal(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
     <div>
      {countryVal.map((item,i)=>(
        <CountryCard key={i+1} id={item.id} Rank={item.Rank} country={item.country} />
      ))}
      <div>
        <Pagination total={10} current={page} onChange={(value)=>setPage(value)} />
      </div>
     </div>
  )
}

export default Country