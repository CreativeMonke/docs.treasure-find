import React from "react";
import Box from "@mui/joy/Box";
import "./Css/Home.css";
import SupportPage from "./Support/SupportPage";

function Home() {
  return (
    <Box className="page-root" backgroundColor="background.body">
        <SupportPage />
    </Box>
  );
}

export default Home;
