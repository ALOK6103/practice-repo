import React from 'react'

interface PaginationProp{
    current:number;
    total:number;
    onChange:(current:number)=>void
}

const Pagination = ({current,total,onChange}:PaginationProp) => {

    const prev=<button disabled={current<=1} onClick={()=>onChange(current-1)}>Prev</button>
    const curPage=<button>{current}</button>
    const next=<button disabled={current>=10} onClick={()=>onChange(current+1)}>Next</button>
  return (
    <div>
        <div>
            {prev}
            {curPage}
            {next}
        </div>
        <div>
            Total:<b>{total}</b>
        </div>
    </div>
  )
}

export default Pagination