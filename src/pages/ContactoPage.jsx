import { GitHub } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export const ContactoPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "quinto.main",
        paddingY: 5,
        paddingX: { xs: 5, md: 10 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "quicksand",
          fontWeight: "bold",
          color: "tercero.main",
          fontSize: 40,
          marginBottom: 1,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Contacto
      </Typography>
      <Grid container>
        <Grid
          sx={{ textAlign: { xs: "center", md: "right" } }}
          item
          xs={12}
          md={6}
        >
          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "white",
              color: "primero.main",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            size="largue"
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/JulianCode99"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "white",
              color: "primero.main",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            size="largue"
            variant="contained"
            startIcon={<InstagramIcon />}
            href="https://instagram.com/julian.gomez__99"
            target="_blank"
          >
            Instagram
          </Button>

          <Button
            sx={{
              m: 1,
              borderRadius: 10,
              backgroundColor: "white",
              color: "primero.main",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            size="largue"
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/573219841736?text= Cordial saludo! Soy un Desarrolador Web, como podria ayudarte?"
            target="_blank"
          >
            WhatSapp
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
