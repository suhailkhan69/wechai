import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const pages = ['Home', 'About Us', 'Gallery', 'Contact'];
const brands = ['Brand 1', 'Brand 2', 'Brand 3'];
const settings = ['Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElBrands, setAnchorElBrands] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenBrandsMenu = (event) => {
    setAnchorElBrands(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseBrandsMenu = () => {
    setAnchorElBrands(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/logowc.png" 
              alt="Logo" 
              style={{ width: 150, height: 'auto' }} // Increased the width
            />
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', marginLeft: 'auto' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link 
                      to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '-')}`} 
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu Items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link 
                  to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '-')}`} 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {page}
                </Link>
              </Button>
            ))}

            {/* "Our Brands" Dropdown with Hover */}
            <Box
              sx={{ position: 'relative' }}
              onMouseEnter={handleOpenBrandsMenu}
              onMouseLeave={handleCloseBrandsMenu}
            >
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleCloseNavMenu}
              >
                Our Brands
              </Button>
              <Menu
                id="brands-menu"
                anchorEl={anchorElBrands}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElBrands)}
                onClose={handleCloseBrandsMenu}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  left: 0,
                }}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand} onClick={handleCloseBrandsMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{brand}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* User Menu (Avatar and Settings) */}
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
