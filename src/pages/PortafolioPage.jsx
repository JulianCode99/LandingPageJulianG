import {
  Box,
  Stack,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { proyectos } from "../database/proyectos";
import GitHubIcon from "@mui/icons-material/GitHub";

export const PortafolioPage = () => {
  return (
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
          color: "primero.main",
          fontSize: 42,
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Portafolio
      </Typography>
      {proyectos.map((proyecto) => (
        <Box key={proyecto.id} sx={{ width: "100%" }}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={24}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6} xs={12}>
                <img
                  className="portafolio"
                  src={proyecto.imagen}
                  alt={proyecto.imagen}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "quicksand",
                    fontWeight: "bold",
                    fontSize: 28,
                    marginBottom: 2,
                  }}
                >
                  {proyecto.nombre}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "quicksand",
                    fontWeight: "bold",
                    fontSize: 16,
                    marginBottom: 2,
                  }}
                >
                  {proyecto.descripcion}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "quicksand",
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "cuarto.main",
                    marginBottom: 6,
                  }}
                >
                  {proyecto.stack}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "cuarto.main",
                    }}
                    size="largue"
                    variant="contained"
                    startIcon={<ArrowOutwardIcon />}
                    href={proyecto.link_preview}
                    target="_blank"
                  >
                    Vista Previa
                  </Button>
                  <Button
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "cuarto.main",
                    }}
                    size="largue"
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href={proyecto.link_github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </Container>
  );
};
