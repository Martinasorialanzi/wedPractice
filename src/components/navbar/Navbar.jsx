"use client"
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';




const Navbar = () => {
  const sections=['Evento', 'Confirmación', 'Regalos','Más']
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return(

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="" sx={{ backgroundColor:'#D9D9D9', boxShadow: 'none' }}>
        <Toolbar>

          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1, 
          fontFamily:'anika',
          fontSize:'20px',
          color:'#000000',
          fontWeight:'700',
          marginX:'6%' }}>
            Nombre & Nombre
          </Typography>
          {sections.map((section,index)=>{
            return(
            <Button 
            key={index}
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              mr: 2,
              fontFamily:'anika',
              fontSize:'16pxpx',
              color:'#000000',
              fontWeight:'700',
              textTransform:'none'
            }} 
            href={`#${section}`}>{section}</Button>
            )
          })}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
            size="large"
            edge="start"
            color='#000000'
            aria-label="menu"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon color='black' />
          </IconButton>

          <Menu
            backgroundColor="#D9D9D9"
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
              sx={{
                display: { xs: 'block', md: 'none' },
                
              }}
            >
              {sections.map((section,index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu} sx={ {}}>
                  <Button textAlign="center" href={`#${section}`}
                   sx={{ 
                    mr: 2,
                    fontFamily:'anika',
                    fontSize:'16pxpx',
                    color:'#000000',
                    fontWeight:'700',
                    textTransform:'none',
                    // backgroundColor:"#D9D9D9"
                  }}
                  >{section}</Button>
                </MenuItem>
              ))}
            </Menu>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar