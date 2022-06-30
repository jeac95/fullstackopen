import React from "react"


const Person = (props) => {
  const { persons, filterName } = props
  
  return ( 
    <div>
        {persons.filter(person => person.name.toUpperCase().includes(filterName.toUpperCase())).map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )}
    </div>
  )
}

export default Person