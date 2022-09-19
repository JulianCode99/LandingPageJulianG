import { Button, Container, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import fondoj from "../assets/fondoj.jpeg";
//import React from "react";

export const InicioPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to left bottom, #D4E7FE, #FFF)",
        paddingTop: 25,
        paddingBottom: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      {
        //<h1>Inicio</h1>
      }
      <Grid container>
        <grid sx={{ TextAling: "left" }} item xs={12} sm={6}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "quicksand",
              fontWeight: "bold",
              color: "primero.main",
              fontSize: 46,
            }}
          >
            Bienvenido 👋🏻 
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "quicksand",
              fontWeight: "bold",
              color: "segundo.main",
              fontSize: 46,
              marginBottom: 2,
            }}
          >
            Me llamo Julian
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "quicksand",
              fontSize: 26,
              marginBottom: 6,
            }}
          >
            Soy estudiante de Ingeneria de Software, tecnologo en Analisis y
            Desarrollo de Sistemas De Informacion.
          </Typography>
          <Button
            sx={{ borderRadius: 10 }}
            href="https://github.com/JulianCode99"
            target="_blank"
            size="largue"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            Mi Prefil de Github
          </Button>
        </grid>
        <grid
          sx={{ 
            TextAling: { xs: "center", md: "right" },
            marginTop: { xs: 10, md: 0},
               }}
          item
          xs={12}
          sm={6}
        >
        <img src={fondoj} />
        </grid>
      </Grid>
    </Container>
  );
};
