'use client'
import React from 'react'
import { useState } from "react"
import { searchRecord } from "./searchRecord" 


const SearchBar = () => {
    const [query, setQuery] =useState('')
    const [results, setResults] = useState<any[]>([])

    const handleSearch = async() =>{
        const formData = new FormData()
        formData.append('query',query)
        const res = await searchRecord(formData)
        setResults(res)
    }

  return (
    <div>
        <h1>Search Records</h1>
        <input type="text" value={query} 
        onChange={(e)=> setQuery(e.target.value)} 
        placeholder="Search Here" 
        className="border p-2 mr-2" 
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">Search</button> 
    </div>
  )
}

export default SearchBar



