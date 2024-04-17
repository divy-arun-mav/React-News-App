import React, { useState } from 'react'
import { useGlobalContext } from './Context';

const Search = () => {

  const { query , getQuery } = useGlobalContext();

  return (
    <div className='search-bar'>
      <input className='query' type='text' value={query} onChange={(e) => getQuery(e.target.value)}/>
    </div>
  )
}

export default Search