import * as React from "react";
import logojulian from "../assets/logo-julian.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [anchorElNav, setAnchorELNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorELNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorELNav(null);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "primero.main",
      }}
      position="fixed"
    >
      <Container maxWidth="full">
        <Toolbar>
          {/*logo y nombre escrito*/}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img className={{ maxWidth: 2 }} src={logojulian} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "quicksand",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Julian David Garcia Gomez
          </Typography>

          {/*boton de menu movil*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link activeClass="active" smooth spy to="inicio">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer " }}
                >
                  Inicio
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="perfil">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer " }}
                >
                  Perfil
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="estudios">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer " }}
                >
                  Estudios
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="experiencia">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer " }}
                >
                  Experiencia
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="portafolio">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer " }}
                >
                  Portafolio
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="inicio">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer " }}
                >
                  Contacto
                </Typography>
              </Link>
            </Menu>
          </Box>

          {/*logo y nombre movil*/}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img className={{ width: 2 }} src={logojulian} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "quicksand",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JulianCode99
          </Typography>

          {/* Botones menu escritorio*/}
          <Box
            sx={{
              cursor: "pointer",
              flex: 1,
              alignItems: "center",
              justifyCotent: "end",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link activeClass="active" smooth spy to="inicio">
              <Typography sx={{ marginLeft: 6 }}>Inicio</Typography>
            </Link>
            <Link activeClass="active" smooth spy to="perfil">
              <Typography sx={{ marginLeft: 6 }}>Perfil</Typography>
            </Link>
            <Link activeClass="active" smooth spy to="estudios">
              <Typography sx={{ marginLeft: 6 }}>Estudios</Typography>
            </Link>
            <Link activeClass="active" smooth spy to="experiencia">
              <Typography sx={{ marginLeft: 6 }}>Experiencia</Typography>
            </Link>
            <Link activeClass="active" smooth spy to="portafolio">
              <Typography sx={{ marginLeft: 6 }}>Portafolio</Typography>
            </Link>
            <Link activeClass="active" smooth spy to="contacto">
              <Typography sx={{ marginLeft: 6 }}>Contacto</Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
