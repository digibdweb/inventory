'use client'
import React from 'react'
import { useState } from "react"
import { searchRecord } from "./searchRecord" 
import { useEffect,useRef } from 'react' //this line is for auto select of the input text


export  const SearchBar = () => {
    const [query, setQuery] =useState('')
    const [results, setResults] = useState<any[]>([])
    
    const inputRef = useRef(null) // also input text

    useEffect(()=>{
      inputRef.current.focus();
      inputRef.current.select();
    },[]);
    const handleSearch = async() =>{
        const formData = new FormData()
        formData.append('query', query)
        const res = await searchRecord(formData)
        setResults(res)
        inputRef.current.select();
    }
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
      if (e.key =='Enter'){
        e.preventDefault()
        handleSearch()
      }
    }

  return (
    <div>
        <h1>Search Records</h1>
        <input type="text"  
       // defaultValue="Scan"
        ref={inputRef}
        value={query}
        onChange={(e)=> setQuery(e.target.value)} 
        onKeyDown={handleKeyDown}
        placeholder="Search Here" 
        className="border p-2 mr-2" 
        />
        <button onClick={handleSearch} className="bg-[#0E3B64] text-white px-4 py-2">Search</button> 

        <ul className='mt-4'>
          {results.map((equipment) => (
            <li key={equipment.sl} className='border-b py-2'>
              {equipment.name}          {equipment.barcode}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default SearchBar



