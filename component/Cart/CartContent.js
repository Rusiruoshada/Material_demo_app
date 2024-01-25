import React, { useState } from 'react';
import { Box, Typography, Divider, TextField, Button } from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';
import Card from '../Card/Card';


const List = ({ anchor, toggleDrawer }) => {

  
  let cartItems = [
    {
      id:1,
      itemName: 'Ice cream',
      itemImage: '/1 (1).jpg',
      itemDescription: '500ml',
      itemPrice: 2300,
    },
    {
      id:2,
      itemName: 'Ice cream',
      itemImage: '/1 (2).jpg',
      itemDescription: '500ml',
      itemPrice: 1000,
    },
    {
      id:3,
      itemName: 'Ice cream',
      itemImage:'/1 (3).jpg',
      itemDescription: '500ml',
      itemPrice: 1200,
    },
    {
      id:4,
      itemName: 'Ice cream',
      itemImage: '/1 (1).jpg',
      itemDescription: '500ml',
      itemPrice: 1800,
    },
    {
      id:5,
      itemName: 'Ice cream',
      itemImage: '/1 (1).jpg',
      itemDescription: '500ml',
      itemPrice: 1800,
    },
  ];

  const checkout = [{name:'Subtotal',value:4000},{name: 'Tax', value : 400 }];

  const total = {name:'Total',value: [checkout[0].value+ checkout[1].value]}
  
  const [items, setItems] = useState(cartItems)

  const deleteCartItem = (id) => {
    console.log(id);
    const remainItems = items.filter(item => {
      return item.id !== id
  });
  setItems(remainItems)
  }


  return (
    <Box
      sx={{ width: {lg:450, sm:370, md:430 ,xs:320} }}
      role='presentation'
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      <div>
        <Typography
          textAlign='start'
          variant='h5'
          sx={{ display: 'flex', marginBottom: '4px', alignItems: 'center' }}
        >
          <IoIosArrowBack
            className='items-center  cursor-pointer'
            onClick={toggleDrawer(anchor, false)}
          />
          Cart
        </Typography>
        <Divider
          sx={{ width: '90%', justifyContent: 'center', marginX: 'auto' }}
        />
      </div>
      
      <div>
        {items.map(card => (
          <Card
            key={card.id}
            itemName={card.itemName}
            itemImage={card.itemImage}
            itemDescription={card.itemDescription}
            itemPrice={card.itemPrice}
            id={card.id}
            onClicks={deleteCartItem}
          />
        ))}
      </div>

          <Box paddingX='8px' paddingY='4px' height='10.5rem' position={'sticky'} bottom={0} bgcolor={'#fff'} >
              <Divider sx={{width:'90%', justifyContent:' center', marginX:'auto',marginY:'4px'}} />

              <div className='my-2 mx-4 '>
                <div className='flex col-auto justify-between'>
                  <Typography fontWeight={450}>
                    {checkout[0].name} :
                  </Typography>
                  <Typography>
                    Rs. {checkout[0].value}
                  </Typography>
                </div>

                <div className='flex col-auto justify-between'>
                  <Typography fontWeight={400} color={'gray'}>
                    {checkout[1].name} :
                  </Typography>
                  <Typography color={'gray'}>
                    Rs. {checkout[1].value}
                  </Typography>
                </div>
                
                <Divider sx={{width:'90%', justifyContent:' center', marginX:'auto',marginY:'4px'}} />
              </div>


              <div className='my-2 mx-4 '>
                <div className='flex col-auto justify-between mb-3'>
                  <Typography fontWeight={550}>
                    {total.name} :
                  </Typography>
                  <Typography fontWeight={550}>
                    Rs. {total.value}
                  </Typography>
                </div>

              <Button variant='contained' fullWidth >
                process to Checkout
              </Button>

              </div>

          </Box>
    </Box>
  );
};

export default List;

