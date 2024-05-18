import React from "react";
import Box from "@mui/joy/Box";
import SupportPage from "./Support/SupportPage";
import { useTheme } from "@mui/joy";

function Home() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const opacityAmmount = isDarkMode ? "0.90" : "0.85";
  return (
    <Box
      className="page-root"
      backgroundColor="background.body"
      sx={{
        display: "flex",
        flexDirection: "column",
        opacity: `${opacityAmmount}`,
        borderRadius: 10,
      }}
    >
      <SupportPage />
    </Box>
  );
}

export default Home;
