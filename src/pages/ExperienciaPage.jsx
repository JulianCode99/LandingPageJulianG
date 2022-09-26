import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const ExperienciaPage = () => {
  return (
    //<div>EstudiosPage</div>
    <Container
      sx={{
        flexGrow: 1,
        background: "#FFF",
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
          color: "primero.main",
          fontSize: 42,
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Experiencia !!
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
              COLOMBIA TELECOMUNICACIONES S.A ESP "Telefónica"
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>
              ÁREA DE DESARROLLO: FABRICA DE CREDITO. AVENIDA CARACAS N- 60-24
              CHAPINERO-3 PISO - ÁREA FÁBRICA DE CRÉDITO FUNCIONES: DESARROLLO Y
              AUTOMATIZACIÓN EN EL PROCESO DEVOLUCIONES DEL ESTADO DE NEGOCIO EN
              BASE DE DATOS NABIS DIGITAL, DESARROLLO Y AUTOMATIZACIÓN EN EL
              PROCESO DE SEGUIMIENTO Y AUDITORÍA APLICADO AL INFORME CCA,
              DESARROLLO DE APLICATIVO WEB PARA AUTOMATIZACIÓN Y SEGUIMIENTO EN
              EL FLUJO DE COMITÉS.
            </Typography>
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
              DEPARTAMENTO NACIONAL DE PLANEACIÓN "SIBEN"
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>
              PROYECTO ACTUALIZACIÓN BASE DE DATOS SISBEN IV CIUDAD: LA CALERA
              CUNDINAMARCA FUNCIONES: RECOLECCIÓN Y VERIFICACIÓN DE DATOS
              MEDIANTE EL (DMC) DISPOSITIVO MÓVIL DE CAPTURA PARA ACTUALIZACIÓN
              DE LA BASE DE DATOS SISBÉN IV, DE ACUERDO A LAS METODOLÓGICAS,
              TÉCNICAS Y OPERATIVAS. ADOPTANDO LOS NUEVOS LINEAMIENTOS DEL
              GOBIERNO NACIONAL EN EL MUNICIPIO DE LA CALERA EN ZONA RURAL Y
              URBANA.{" "}
            </Typography>
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
              DEPARTAMENTO ADMINISTRATIVO NACIONAL ESTADISTICO "DANE"
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>
              AREA: DIRPEN{" "}
            </Typography>
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
              CMS RODRIGUEZ AZUERO ASOCIADOS S.A
            </Typography>
            <Typography sx={{ fontFamily: "quicksand" }}>
              CARGO: ESPECIALISTA DE TECNOLOGIA FUNCIONES: APOYAR EL
              MEJORAMIENTO Y ESTANDARIZACIÓN DE LOS PROCESOS LEGALES Y
              ADMINISTRATIVOS DE CMS-RA. BRINDAR APOYO Y SOPORTE DE PRIMER NIVEL
              A LOS USUARIOS FINALES, ALINEANDO A LOS OBJETIVOS ESTRATÉGICOS
              INSTITUCIONALES Y NORMAS VIGENTES. MANTENIMIENTO Y SOPORTE A
              EQUIPOS DE COMPUTO. LEVANTAMIENTO Y SOPORTE DE INVENTARIOS. APOYAR
              A LA COORDINACIÓN DE TECNOLOGÍA EN LAS ACTIVIDADES. ADEMÁS DE
              TODAS LAS FUNCIONES QUE SE ASIGNARON INHERENTES ALCARGO.{" "}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
