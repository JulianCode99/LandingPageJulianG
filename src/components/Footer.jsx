import { Typography, Box, Container } from "@mui/material";
import logojulian from "../assets/logo-julian.png";
import React from "react";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "sexto.main",
        paddingY: 2,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Box>
        <img src={logojulian} />
      </Box>
    </Container>
  );
};
