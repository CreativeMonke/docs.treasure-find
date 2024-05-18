import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Sheet,
  Typography,
} from "@mui/joy";
import Drawer from "@mui/joy/Drawer";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import {
  ApiRounded,
  CodeRounded,
  CopyrightRounded,
  HomeRounded,
  KeyboardArrowDownOutlined,
  RocketLaunchRounded,
  StorageRounded,
  TuneRounded,
} from "@mui/icons-material";
import Header from "../pages/PageStructure/Header";
import LanguageSwitcher from "./Language/LanguageSelect";
import { useTranslation } from "react-i18next";
function Toggler({ defaultExpanded = false, children, renderToggle }) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

function NavBar() {
  const { t } = useTranslation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" && window.innerWidth < 900
  );
  const location = useLocation();
  function isCurrent(path) {
    return location.pathname === path;
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  const sidebarItems = [
    {
      title: `${t("faq")}`,
      icon: <HomeRounded />,
      link: "/",
      current: isCurrent("/"),
      nested: false,
    },
    {
      title: "Deployment guide",
      icon: <RocketLaunchRounded />,
      link: "/deployment",
      isCurrent: isCurrent("/deployment"),
      nested: false,
    },
    {
      title: `${t("configuration")}`,
      icon: <TuneRounded />,
      link: "/configuration",
      isCurrent: isCurrent("/configuration"),
      nested: false,
    },
    {
      title: "Api Reference",
      icon: <ApiRounded />,
      link: "/api",
      isCurrent: isCurrent("/api"),
      nested: true,
      children: [
        {
          title: "Endpoints",
          link: "/api/endpoints",
          isCurrent: isCurrent("/api/endpoints"),
        },
        {
          title: "Authentication",
          link: "/api/authentication",
          isCurrent: isCurrent("/api/authentication"),
        },
      ],
    },
    {
      title: "Database configuration",
      icon: <StorageRounded />,
      link: "/api/database",
      isCurrent: isCurrent("/api/database"),
      nested: false,
    },
    {
      title: "Codebase Overview:",
      icon: <CodeRounded />,
      link: "/codebase",
      isCurrent: isCurrent("/codebase"),
      nested: true,
      children: [
        {
          title: "Project structure",
          link: "/codebase/structure",
          isCurrent: isCurrent("/codebase/structure"),
        },
        {
          title: "Module descriptions",
          link: "/codebase/modules",
          isCurrent: isCurrent("/codebase/modules"),
        },
      ],
    },
    {
      title: "Credits",
      icon: <CopyrightRounded />,
      link: "/credits",
      isCurrent: isCurrent("/credits"),
      nested: true,
      children: [
        {
          title: "Frameworks & Libraries",
          link: "/credits/frameworks",
          isCurrent: isCurrent("/credits/frameworks"),
        },
        {
          title: "Hosting Services",
          link: "/credits/hosting",
          isCurrent: isCurrent("/credits/hosting"),
        },
        {
          title: "Other services",
          link: "/credits/other",
          isCurrent: isCurrent("/credits/other"),
        },
      ],
    },
  ];
  function sidebarContents() {
    return (
      <Sheet
        invertedColors
        className="Sidebar"
        sx={{
          boxSizing: "border-box",
          top: 0,
          p: 2,
          gap: 2,
          height: "100dvh",
          maxwidth: "var(--Sidebar-width)",
        }}
      >
        <Box
          className="Sidebar-overlay"
          sx={{
            position: "fixed",
            zIndex: 9998,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100dvh",
            opacity: "var(--SideNavigation-slideIn)",
            backgroundColor: "var(--joy-palette-background-backdrop)",
            transition: "opacity 0.4s",
            transform: {
              xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
              lg: "translateX(-100%)",
            },
          }}
          onClick={closeDrawer}
        />
        <Box className="SidebarHeader">
          <Typography level="title-lg">{t("appName")} - DOCS</Typography>
          <LanguageSwitcher />
        </Box>

        <Box className="NavigationLinks">
          <List
            className="TopList"
            sx={{
              "--ListItem-radius": (theme) => theme.vars.radius.sm,
            }}
          >
            {sidebarItems.map((sidebarItem) => {
              return sidebarItem.nested ? (
                <ListItem nested key={sidebarItem.title}>
                  <Toggler
                    renderToggle={({ open, setOpen }) => (
                      <ListItemButton onClick={() => setOpen(!open)}>
                        {sidebarItem.icon}
                        <ListItemContent>
                          <Typography
                            level="title-md"
                            color={open && "warning"}
                          >
                            {sidebarItem.title}
                          </Typography>
                        </ListItemContent>
                        <KeyboardArrowDownOutlined
                          sx={{ transform: open ? "rotate(180deg)" : "none" }}
                        />
                      </ListItemButton>
                    )}
                  >
                    <List sx={{ gap: 0.5 }}>
                      {sidebarItem.children.map((nestedItem) => {
                        return (
                          <ListItem>
                            <ListItemButton
                              component={Link}
                              to={nestedItem.link}
                              selected={nestedItem.isCurrent}
                              onClick={toggleDrawer}
                            >
                              <Typography
                                color={nestedItem.isCurrent ? "primary" : ""}
                              >
                                {nestedItem.title}
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Toggler>
                </ListItem>
              ) : (
                <ListItem key={sidebarItem.title}>
                  <ListItemButton
                    component={Link}
                    to={sidebarItem.link}
                    onClick={closeDrawer}
                  >
                    {sidebarItem.icon}
                    <ListItemContent>
                      <Typography
                        level="title-md"
                        color={sidebarItem.isCurrent ? "primary" : ""}
                      >
                        {sidebarItem.title}
                      </Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Typography
          level="body-sm"
          sx={{
            textAlign: "center",
          }}
        >
          v0.0.5a
        </Typography>
      </Sheet>
    );
  }

  const renderMobileMenu = () => (
    <Drawer
      className="SidebarDrawer"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      anchor="left"
      size="lg"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        borderColor: "divider",
        zIndex: 10000,
        height: "100dvh",
      }}
    >
      {sidebarContents()}
    </Drawer>
  );
  return (
    <>
      {isMobileView ? (
        <>
          <Sheet
            className="Header"
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              position: "fixed",
              top: 0,
              width: "100vw",
              height: "var(--Header-height)",
              zIndex: 9995,
              p: 1,
              gap: 1,
              borderBottom: "1px solid",
              borderColor: "background.level1",
              boxShadow: "sm",
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              variant="outlined"
              color="neutral"
              size="sm"
            >
              <MenuIcon />
            </IconButton>
            <Header />
          </Sheet>
          {renderMobileMenu()}
        </>
      ) : (
        sidebarContents()
      )}
    </>
  );
}

export default NavBar;
