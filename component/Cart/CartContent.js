import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';
import Card from '../Card/Card';

const List = ({ anchor, toggleDrawer }) => {
  let cartItems = [
    {
      itemName: 'Ice cream',
      itemImage: '../public/1 (1).jpg',
      itemDescription: '500ml',
      itemPrice: 800,
    },
    {
      itemName: 'Ice cream',
      itemImage: '../public/1 (1).jpg',
      itemDescription: '500ml',
      itemPrice: 800,
    },
    {
      itemName: 'Ice cream',
      itemImage: '../public/1 (1).jpg',
      itemDescription: '500ml',
      itemPrice: 800,
    },
    {
      itemName: 'Ice cream',
      itemImage: '../public/1 (1).jpg',
      itemDescription: '500ml',
      itemPrice: 800,
    },
  ];

  return (
    <Box
      sx={{ width: {lg:450, sm:370, md:400 ,xs:320} }}
      role='presentation'
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
      <div className='snap-y scroll-smooth overflow-scroll h-[20rem]'>
        {cartItems.map(card => (
          <Card
            key={card.itemName}
            itemName={card.itemName}
            itemImage={card.itemImage}
            itemDescription={card.itemDescription}
            itemPrice={card.itemPrice}
          />
        ))}
        
      </div>
    </Box>
  );
};

export default List;

