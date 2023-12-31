import { TextField } from '@mui/material';
import React from 'react';
import ButtonField from '../Button/Button';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className='grid grid-cols-5 px-[var(--defaultPadding)] absolute top-28 w-full '>
        <div>
            
        </div>
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
                }}
                size='normal'
            />
        </div>
        <div className='grid'>
            <ButtonField 
                textField='Search' 
                variant='contained' 
                icon= <IoSearch />

            />
        </div>
    </div>
  );
};

export default SearchBar;
