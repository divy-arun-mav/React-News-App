import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();

  return (
    <>
      <div className='pagination_btn'>
        <button onClick={() => getPrevPage()} className='prev'>PREV</button>
        <p>
          {page+1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()} className='next'>NEXT</button>
      </div>
    </>
  )
}

export default Pagination