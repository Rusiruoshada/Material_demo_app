import { TextField } from '@mui/material';
import React from 'react';
import ButtonField from '../Button/Button';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className='flex '>
        <div className='relative flex justify-center'>
            <TextField
                id='outline-search'
                type='search'
                onChange={(event) => {
                console.log(event.target.value);
                }}
                sx={{
                width: '55%',
                position: 'absolute',
                top: '-45px',
                bottom: 'auto',
                right: 'auto',
                left: 'auto',
                backgroundColor: 'white',
                }}
                size='normal'
            />
        </div>
        <ButtonField 
            textField='Search' 
            variant='contained' 
            icon= <IoSearch />

        />
    </div>
  );
};

export default SearchBar;
