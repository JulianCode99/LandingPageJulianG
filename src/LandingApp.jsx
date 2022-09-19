//import { Button } from "@mui/material";
import React from "react";
import { LandingPage } from "./pages/LandingPage";
import { AppTheme } from "./theme/AppTheme";

export const LandingApp = () => {
  return (
    //<Button variant="contained" color="primary">
    //  Hola Julian
    //  </Button>
    <AppTheme>
      <LandingPage />
    </AppTheme>
  );
};
