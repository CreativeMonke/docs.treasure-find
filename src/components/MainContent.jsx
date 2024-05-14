import React from "react";
import Box from "@mui/joy/Box";
import { GlobalStyles } from "@mui/joy";
import routeConfig from "./Routes/routeConfig.js";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.tsx";

function MainContent() {
  return (
    <Box
      component="main"
      className="MainContent"
      boxSizing="border-box"
      maxHeight="100vh"
      sx={{
        backgroundColor: "background.body",
        px: { xs: 1, md: 1.5 },
        pt: {
          xs: "calc(22px + var(--Header-height))",
          sm: "calc(24px + var(--Header-height))",
          md: 1.5,
        },
        pb: { xs: 1 , md: 1.5 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        gap: 1,
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "42px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "0px",
            },
            "--Sidebar-width": "256px",
          },
        })}
      />
      <Routes>
        {routeConfig.map((route, index) => {
          const Element = route.element;
          const routeElement = (
            <Layout>
              <Element />
            </Layout>
          );

          return (
            <Route
              key={index}
              path={route.path}
              element={routeElement}
            />
          );
        })}
      </Routes>
    </Box>)
}

export default MainContent;
