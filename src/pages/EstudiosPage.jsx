import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const EstudiosPage = () => {
  return (
    //<div>EstudiosPage</div>
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to left bottom, #1a7f89, #FFF)",
        paddingY: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "quicksand",
          fontWeight: "bold",
          color: "segundo.main",
          fontSize: 42,
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Estudios !!
      </Typography>
      <Grid container>
        <Grid sx={{ textAling: "left" }} item xs={12} sn={6}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Diplomado en Desarrollo Front-end con React JS 
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Fundacion Internacional </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Maria Luisa de Moreno </Typography>
          </Paper>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Analisis y Desarollo de Sistemas de Informacion 
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Tecnologo </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Servicio Nacional Aprendizaje SENA </Typography>
          </Paper>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Ingles - Portuges 
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Centro De Lenguas Universidad Pedagogica</Typography>
          </Paper>
        </Grid>
        <Grid sx={{ textAling: "left" }} item xs={12} sn={6}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Ingeneria Software
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Pregrado </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Politecnico Grancolombiano </Typography>
          </Paper>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Bachiller Academico
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Institucion Educativa Departamental Integrada La Calera </Typography>
          </Paper>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Cursos Servicio Nacional Aprendizaje SENA
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Diseño Paginas Web con PHP y MySql</Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Contabilidad Basica</Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>Mantenimiento Computadores</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
