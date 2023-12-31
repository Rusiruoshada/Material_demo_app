import { TextField } from '@mui/material';
import React from 'react';
import ButtonField from '../Button/Button';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className='grid grid-cols-5 px-[var(--defaultPadding)] absolute top-28 sm:top-36 w-full '>
        <div className='relative grid col-span-4'>
            <TextField
                id='outline-search'
                type='search'
                onChange={(event) => {
                console.log(event.target.value);
                }}
                sx={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '10px 0 0 10px',
                border: 0,
                }}
                size='small'
            />
        </div>
        <div className='grid'>
            <ButtonField 
                textField='Search' 
                variant='contained' 
                icon= <IoSearch />
                size = 'small'
                borderRadius = '0 10px 10px 0'
            />
        </div>
    </div>
  );
};

export default SearchBar;
