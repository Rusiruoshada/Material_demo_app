import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FiMinus } from "react-icons/fi";


export default function MediaControlCard(props) {
    const [count, setCount ] = React.useState(1);
    const [price , setPrice ] = React.useState(props.itemPrice)


    let countNum = count;
    

    const handleCountIncrease =()=> {
        countNum += 1;
        setCount(countNum);
        setPrice(props.itemPrice * countNum)
    };
    const handleCountDecrease =()=> {
        if(count === 1 ) return;
        countNum -= 1;
        let priceDecrease = price - props.itemPrice;
        setCount(countNum)
        setPrice(priceDecrease)
    };

  return (
    <Card sx={{ display: 'grid', width:'95%',marginX:'auto', marginY: '10px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <CardMedia
        component="img"
        sx={{ width: 90 ,display:'flex', padding:'5px',marginX:'5px',aspectRatio:1, borderRadius:'8px' }}
        image={props.itemImage}
        alt={props.itemName}
      />
        <CardContent sx={{ flex: '1 0 auto',padding:{md:'0 8px',sm:'5px', xl:'3px'},marginY:'auto' }}>
          <Typography component="div" variant="body1">
            {props.itemName}
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" sx={{fontSize:'14px'}}>
            {props.itemDescription}
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', alignItems: 'center', px: 2, pb: 0 }}>
          <IconButton aria-label="decrease">
             <FiMinus className='text-[16px] ' onClick={handleCountDecrease}/>
          </IconButton>

          <Typography variant="p" color="text.secondary" component="div" fontWeight={700} sx={{fontSize:'14px',marginY:'auto'}}>
             {count}
          </Typography>

          <IconButton aria-label="increase">
            <FiPlus className='text-[16px] ' onClick={handleCountIncrease}/>
          </IconButton>
        </Box>

          <Typography variant="body1" color="text.secondary" component="div" fontWeight={700} sx={{fontSize:'14px',marginY:'auto'}}>
            Rs.{price}
          </Typography>
          <IconButton aria-label="delete">
            <MdDelete className='cursor-pointer' /> 
          </IconButton>
      </Box>
      
    </Card>
  );
}
