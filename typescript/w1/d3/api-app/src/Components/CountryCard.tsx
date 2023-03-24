

export interface CountryCardProp{
    id:number;
    country:string;
    Rank:number
}


const CountryCard = ({id,country,Rank}:CountryCardProp) => {
    
  return (
    <div>
        <h3>{id}</h3>
        <h3>{country}</h3>
        <h3>{Rank}</h3>
    </div>
  )
}

export default CountryCard