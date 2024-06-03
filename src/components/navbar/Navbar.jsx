"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const sections = ["Evento", "Confirmación", "Regalos", "Más"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isMenuOpen = Boolean(anchorElNav);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          transition: "margin-bottom 0.3s ease",
          marginBottom: isMenuOpen ? "200px" : "0", // Ajusta el margen inferior cuando el menú está abierto
        }}
      >
        <Toolbar
          sx={{
            minHeight: isMenuOpen ? "64px" : "48px", // Altura mínima del Toolbar para el estado cerrado
            alignItems: isMenuOpen ? "flex-start" : "center",
            transition: "min-height 0.3s ease",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center", // Centra los elementos
            }}
          >
            {sections.map((section, index) => (
              <Button
                key={index}
                sx={{
                  mr: 2,
                  fontFamily: "anika",
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "700",
                  textTransform: "none",
                }}
                href={`#${section}`}
              >
                {section}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }} // Alinea el ícono de menú a la derecha
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon sx={{ color: "#000000" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": {
                backgroundColor: "transparent", // Elimina el fondo del menú
                boxShadow: "none", // Elimina la sombra del menú
                border: "none", // Elimina los bordes del menú
              },
            }}
          >
            {sections.map((section, index) => (
              <MenuItem
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  justifyContent: "flex-end", // Justifica el contenido del MenuItem a la derecha
                }}
              >
                <Button
                  textAlign="right"
                  href={`#${section}`}
                  sx={{
                    fontFamily: "anika",
                    fontSize: "16px",
                    color: "#000000",
                    fontWeight: "700",
                    textTransform: "none",
                    width: "100%", // Asegura que el botón ocupe todo el ancho del MenuItem
                    justifyContent: "flex-end", // Justifica el texto del botón a la derecha
                  }}
                >
                  {section}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
