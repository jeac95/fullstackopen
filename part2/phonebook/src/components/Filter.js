import React from "react"


const Filter = (props) => {
  const { filterName, handleFilterChange } = props
  
  return ( 
    <div>
      filter shown with <input value={filterName} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filter