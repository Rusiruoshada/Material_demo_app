import { Divider, IconButton, InputBase, Paper, TextField } from '@mui/material';
import React from 'react';

const SearchBar = () => {
    
    return (
        <div className='relative flex justify-center'>
            <TextField 
                id="outline-search"  
                type="search" 
                onChange={(event) => {console.log(event.target.value)}}
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
    )
}

export default SearchBar