import React from 'react';
import Search from './Components/Search';
import Pagination from './Components/Pagination';
import Stories from './Components/Stories';
import './App.css';

const App = () => {

  return (
    <>
      <div className='headline'>Welcome to news my website</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
