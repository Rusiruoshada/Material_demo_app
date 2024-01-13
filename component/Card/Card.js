import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDelete } from "react-icons/md";

export default function MediaControlCard(props) {

  return (
    <Card sx={{ display: 'grid', width:'95%',marginX:'auto', marginY: '10px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <CardMedia
        component="img"
        sx={{ width: 90 ,display:'flex', padding:'5px',marginX:'5px',aspectRatio:1, borderRadius:'8px' }}
        image={props.itemImage}
        alt={props.itemName}
      />
        <CardContent sx={{ flex: '1 0 auto',padding:'0 8px',marginY:'auto' }}>
          <Typography component="div" variant="body1">
            {props.itemName}
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" sx={{fontSize:'14px'}}>
            {props.itemDescription}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 0, pb: 0 }}>
          <IconButton aria-label="previous">
            {'rtl' === 'rtl' ? <IoIosArrowBack /> : <IoIosArrowBack />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <IoIosArrowBack sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="delete">
            <MdDelete className='cursor-pointer' /> 
          </IconButton>
        </Box>
      </Box>
      
    </Card>
  );
}
