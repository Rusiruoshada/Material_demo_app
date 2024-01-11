import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { IconButton, Tooltip } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';

export default function TemporaryDrawer({ children }) {
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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
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
      </List>
    </Box>
  );


  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box
          sx={{
            flexGrow: { md: 0, xs: 1 },
            paddingX: '16px',
            display: 'flex',
            justifyContent: 'end',
          }}
          onClick={toggleDrawer(anchor, true)}
          >
            <Tooltip title='Cart' className='relative'>
              <IconButton sx={{ p: 0 }}>
                <FaShoppingCart className='text-white' />

                <div className='text-xs text-white rounded-full bg-green-500 px-3 py-1 aspect-square absolute top-2 bottom-0 right-0 left-3'>
                  <p className='flex justify-center'>0</p>
                </div>
              </IconButton>
            </Tooltip>
          </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
