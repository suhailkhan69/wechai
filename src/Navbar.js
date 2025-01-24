import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About Us', 'Gallery', 'Contact'];
const brands = [
  { name: 'Wecrunch', path: 'https://wecrunchfranchise.in/' },
  { name: 'Rolexcoffee', path: 'https://rollexcoffeefranchise.com/' },
  { name: 'Milkyma', path: 'https://www.milkymastore.in/' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [brandsHover, setBrandsHover] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggleBrandsMenu = () => {
    setBrandsOpen(!brandsOpen);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logowc.png" alt="Logo" style={{ width: 150, height: 'auto' }} />
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton size="large" onClick={handleToggleMobileMenu} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Full-Screen Mobile Menu */}
          {mobileOpen && (
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '75vw',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '20px',
                zIndex: 1200,
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={handleToggleMobileMenu}
                sx={{
                  alignSelf: 'flex-end',
                  color: 'white',
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Menu Items */}
              <Box sx={{ marginTop: '30px', width: '100%' }}>
                {pages.map((page) => (
                  <Typography key={page} variant="h6" sx={{ marginBottom: '15px' }}>
                    <Link
                      to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '-')}`}
                      style={{ color: 'white', textDecoration: 'none' }}
                      onClick={handleToggleMobileMenu}
                    >
                      {page}
                    </Link>
                  </Typography>
                ))}

                {/* Our Brands Section */}
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    marginBottom: '15px',
                    textDecoration: 'none',
                  }}
                  onClick={handleToggleBrandsMenu}
                >
                  Our Brands {brandsOpen ? '▲' : '▼'}
                </Typography>

                {brandsOpen && (
                  <Box sx={{ paddingLeft: '20px' }}>
                    {brands.map((brand) => (
                      <Typography key={brand.name} variant="body1" sx={{ marginBottom: '10px' }}>
                        <a
                          href={brand.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'white', textDecoration: 'none' }}
                          onClick={handleToggleMobileMenu}
                        >
                          {brand.name}
                        </a>
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          )}

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '-')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {page}
                </Link>
              </Button>
            ))}

            {/* "Our Brands" Hover Dropdown (Desktop) */}
            <Box
              sx={{ position: 'relative' }}
              onMouseEnter={() => setBrandsHover(true)}
              onMouseLeave={() => setBrandsHover(false)}
            >
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>Our Brands</Button>

              {brandsHover && (
                <Box
                  sx={{
                    position: 'absolute',
                    backgroundColor: 'black',
                    padding: '10px',
                    borderRadius: '5px',
                    minWidth: '150px',
                    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
                    zIndex: 1100,
                  }}
                >
                  {brands.map((brand) => (
                    <Typography
                      key={brand.name}
                      variant="body2"
                      sx={{
                        padding: '8px',
                        color: 'white',
                        '&:hover': { backgroundColor: '#FCCD2D', color: 'black' },
                      }}
                    >
                      <a href={brand.path} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {brand.name}
                      </a>
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
  