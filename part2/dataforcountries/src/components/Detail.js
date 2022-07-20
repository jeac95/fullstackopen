import React from "react"

const Detail = ({ country }) => {
    let [...languages]= Object.values(country.languages)

    return (
        <>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <div>
                <ul>
                {languages.map(language =>
                    <li key={language}>{language}</li>
                )}
                </ul>
            </div>
            <img src={country.flags.png} alt={country.name.common}/>
        </>
    )
}

export default Detail