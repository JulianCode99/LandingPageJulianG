//import { Button } from "@mui/material";
import React from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { AppTheme } from "./theme/AppTheme";

export const LandingApp = () => {
  return (
    //<Button variant="contained" color="primary">
    //  Hola Julian
    //  </Button>
    <AppTheme>
      <NavBar />
      <LandingPage />
      <Footer />
    </AppTheme>
  );
};
