import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '../Cart/CartContent';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { Badge, IconButton, Tooltip, Typography, } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box
            sx={{
              flexGrow: { md: 0, xs: 1 },
              paddingX: '16px',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center'
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <Tooltip title='Cart' className='relative'>
              <IconButton sx={{ p: 0 }}>
                <FaShoppingCart className='text-white' />
                  <Badge
                    badgeContent={14}
                    color="primary"
                    invisible={false}
                    size="large"
                    sx={{marginLeft: '5px',marginTop:'15px'}}
                  />
              </IconButton>
            </Tooltip>
          </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <List anchor={anchor} toggleDrawer={toggleDrawer}/>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}


