import { Box } from "@mui/system";
import React from "react";
import {
  InicioPage,
  PerfilPage,
  EstudiosPage,
  ExperienciaPage,
  PortafolioPage,
  ContactoPage,
} from "./";

export const LandingPage = () => {
  return (
    <Box>
      <Box id="inicio">
        <InicioPage />
      </Box>
      <Box id="perfil">
        <PerfilPage />
      </Box>
      <Box id="estudios">
        <EstudiosPage />
      </Box>
      <box id="experiencia">
        <ExperienciaPage />
      </box>
      <box id="portafolio">
        <PortafolioPage />
      </box>
      <box id="contacto">
        <ContactoPage />
      </box>
    </Box>
  );
};
