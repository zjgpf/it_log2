import React from 'react';
import { connect } from 'react-redux'; 
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const onSearch = e => {
    const text = e.target.value.trim();
    searchLogs(text);
  };
  return (
    <div className='p-4 flex items-center w-full bg-green-800 text-white'>
      <i className='fas fa-search mx-4' />
      <input onChange={onSearch} type='text' placeholder='Search logs...' className='bg-green-800 py-1 px-2 w-full' />
    </div>
  )
}

export default connect(
  null,
  { searchLogs }
)(SearchBar);
