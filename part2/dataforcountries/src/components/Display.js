import React from "react"

import Detail from "./Detail"

const Display = ({ countries }) => {
    console.log(countries)

    if (countries.length === 1) {
        return (
            <Detail country={countries[0]} />
        )
    }

    if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    return (
        <div>
        {countries.map(country => 
            <div key={country.name.common}>{country.name.common}</div>
        )}
        </div>
    )

}

export default Display