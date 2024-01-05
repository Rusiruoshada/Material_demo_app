import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import { Menu, MenuItem } from '@mui/material';

const pages = [
  'Home',
  'Hampers',
  'Lyvivo Products',
  'Lyvivo Exclusives',
  'All Products',
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [avatarNav, setAvatarNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenCart = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenAvatar = (event) => {
    setAvatarNav(!avatarNav);
  }

  const handleOpenNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'var(--navbar)',
        paddingX: 'var(--defaultPadding)',
        paddingBottom: '2.5rem',
        zIndex: '0',
        top: '40px',
        left: 'auto',
        right: 'auto',
        bottom: 'auto'
      }}
      className='px-[var(--defaultPaddingSm)] md:px-[var(--defaultPaddingMd)] lg:px-[var(--defaultPadding)]'
    >
      <Container maxWidth='xl' className='px-0'>
        <Toolbar disableGutters>
          <Typography
            variant='h4'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Lyvivo
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 1,
            }}
            className='lg:gap-1'
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {}} // add page routes for this
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  textTransform: 'capitalize',
                  ':hover': {
                    color: '#dddddd',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: { md: 0, xs: 1 },
              paddingX: '16px',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <Tooltip title='Cart' className='relative'>
              <IconButton onClick={handleOpenCart} sx={{ p: 0 }}>
                <FaShoppingCart className='text-white' />
                <div className='text-xs text-white rounded-full bg-green-500 px-3 py-1 aspect-square absolute top-2 bottom-0 right-0 left-3'>
                  <p className='flex justify-center'>0</p>
                </div>
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
              marginX: '12px',
              fontSize: '24px',
            }}
          >
            <IconButton sx={{ color: 'white' }} onClick={handleOpenAvatar}>
              <RxAvatar />
            </IconButton>

            <Menu
              sx={{ mt: {md:'45px', xs: '4rem'}, backgroundColor: {xs: '#00000099', sm: 'transparent'}}}
              id='menu-appbar'
              anchorEl={avatarNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(avatarNav)}
              onClose={handleOpenAvatar}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => {}} sx={{display: 'flex', justifyContent: 'end'}}>  
                  <Typography textAlign='end'>     
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
              fontSize: '24px',
            }}
          >
            <IconButton sx={{ color: 'white' }} onClick={handleOpenNavMenu}>
              <IoMenu />
            </IconButton>
            <Menu
              sx={{ mt: {md:'45px', xs: '4rem'}, backgroundColor: {xs: '#00000099', sm: 'transparent'}}}
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleOpenNavMenu}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => {}} sx={{display: 'flex', justifyContent: 'end'}}>  
                  <Typography textAlign='end'>     
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
