import { Container, Grid, Typography } from "@mui/material";
import fondoj from "../assets/fondoj.jpeg";
import imgsoftware from "../assets/imgsoftware.png";
//import React from "react";

export const PerfilPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "#FFF",
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
              fontSize: 36,
              marginBottom: 8,
            }}
          >
            Tecnologo: Analisis Y Desarollo De Sistemas De Informacion 👨🏻‍💻
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontFamily: "quicksand",
              fontSize: 20,
              marginBottom: 8,
            }}
          >
            Competencias para evaluar la
            viabilidad de los proyectos, llevar a cabo entrevistas y otras
            acciones para investigación, documentar y analizar las operaciones
            de los sistemas actuales, definir las necesidades del usuario para
            mejorar o sustituir sistemas, identificar aplicaciones potenciales
            de tecnología informática para satisfacer las necesidades, diseñar
            entradas y salidas en los procedimientos de sistemas, diseñar
            archivos y base de datos. Persona responsable, cumplida, honesta;
            con amplia disposición y facilidad para el aprendizaje, con aptitud
            para el trabajo en equipo.
          </Typography>
          
        </grid>
        <grid
          sx={{
            TextAling: { xs: "center", md: "right" },
            marginTop: { xs: 10, md: 0 },
          }}
          item
          xs={12}
          sm={6}
        >
          <img src={imgsoftware} />

          <Typography
            variant="h2"
            sx={{
              fontFamily: "quicksand",
              fontWeight: "bold",
              color: "primero.main",
              fontSize: 25,
              marginBottom: 5,
            }}
          >
            !Proximamente Ingeniero Software! 📚👨🏻‍💻
          </Typography>

        </grid>
      </Grid>
    </Container>
  );
};
