import { useState, useEffect } from "react"

import axios from "axios"

import Display from "./components/Display"

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountries, setSearchCountries] = useState('')
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setSearchCountries(event.target.value)
  }

  const Search = (countries, string) => {
    let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(string.toLowerCase()))
    return filteredCountries
  }

  const filteredCountries = searchCountries === ''
      ? []
      : Search(countries, searchCountries)

  return (
    <>
      <div>
        find countries <input onChange={handleFilterChange}/>
      </div>
      <Display countries={ filteredCountries }/>
    </>
  )
}

export default App
