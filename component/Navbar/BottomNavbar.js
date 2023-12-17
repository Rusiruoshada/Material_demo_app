import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FaShoppingCart } from 'react-icons/fa';

const pages = [
  'Home',
  'Hampers',
  'Lyvivo Products',
  'Lyvivo Exclusives',
  'All Products',
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenCart = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: 'var(--navbar)',
        paddingX: 'var(--defaultPadding)',
      }}
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
              display: { xs: 'none', md: 'flex' },
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
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  ':hover': {
                    backgroundColor: 'red',
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, paddingX: '16px', margin: 'auto' }}>
            <Tooltip title='Cart' className='relative'>
              <IconButton onClick={handleOpenCart} sx={{ p: 0 }}>
                <FaShoppingCart className='text-white' />
                <div className='text-xs text-white rounded-full bg-green-500 px-3 py-1 aspect-square absolute top-2 bottom-0 right-0 left-3'>
                  <p
                    className='flex justify-center
                 '
                  >
                    0
                  </p>
                </div>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
