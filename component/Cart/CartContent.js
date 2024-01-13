import React from 'react';
import { Box, Typography, Divider} from "@mui/material";
import { IoIosArrowBack } from 'react-icons/io';
import Card from '../Card/Card'

const List = ({anchor, toggleDrawer}) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role='presentation'
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography textAlign='start' variant='h5' sx={{ display: 'flex', marginBottom:'4px', alignItems:'center' }}>
        <IoIosArrowBack className='items-center  cursor-pointer' onClick={toggleDrawer(anchor, false)} />
        Cart
      </Typography>
      <Divider sx={{width:'90%', justifyContent:'center',marginX:'auto'}}/>
      <Card 
        itemName='Ice cream' 
        itemImage="../public/1 (1).jpg"
        itemDescription='500ml'  
      />
    </Box>
  );


  export default List;

  {
    /* <List>
  {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index % 2 === 0 ? (
            <MdOutlineWorkOutline />
          ) : (
            <MdOutlineWorkOutline />
          )}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
  </List>
  <Divider />
  <List>
  {['All mail', 'Trash', 'Spam'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index % 2 === 0 ? (
            <MdOutlineWorkOutline />
          ) : (
            <MdOutlineWorkOutline />
          )}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
  </List> */
  }