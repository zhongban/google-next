'use client'
import React ,{ useState, useEffect} from 'react'

export default function CountryLookup() {
    const [country, setCountry] = useState('USA')
    useEffect(() => {
        fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.IP_API_KEY}`)
        .then(res => res.json())
        .then((data) => {
         setCountry(data.country)   
        })},[])
  return (
    <div>
      {country}
    </div>
  )
}
