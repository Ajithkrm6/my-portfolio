import React, { ReactNode, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Tabs,
  Tab,
  Hidden,
  ListItemButton,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { HashLink as Link } from "react-router-hash-link";

export interface HeaderProps {
  children?: ReactNode;
  customPosition?: "fixed" | "absolute" | "sticky" | "static" | "relative";
}

export const Header = (props: HeaderProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [value, setValue] = useState("");
  const logo = require("../../assets/images/logo8.png");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // const gradientStyle = {
  //   background: "rgba(255, 255, 255, 0.2);",
  //   boxShadow: 0 4px 30px rgba(0, 0, 0, 0.1)
  //   backdropFilter
  //   // background2: "linear-gradient (45deg,#1d1e22,#393f4d)  ",
  //   // You can customize the gradient angle and color stops as needed
  // };

  return (
    <>
      <AppBar
        position={props.customPosition}
        sx={{
          background: "rgba(255, 255, 255, 0.2)",
          position: "fixed",
          width: "100%",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: "blur(5px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Toolbar>
          <Hidden mdDown>
            <Grid
              container
              // sx={gradientStyle}

              display="flex"
              justifyContent="space-between"
            >
              <Grid
                item
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                md={6}
                sm={6}
              >
                <img src={logo} className="logoImage" />
                <Typography>{props.children}</Typography>
              </Grid>
              <Grid
                item
                md={6}
                sm={6}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  component="div"
                  aria-label="secondary tabs example"
                >
                  <Link to="#home">
                    <Tab
                      value="home"
                      label="Home"
                      style={{
                        color: value === "home" ? "#feda6a" : "#ffffff",
                      }}
                      onClick={() =>
                        setValue((prevValue) => {
                          console.log(prevValue); // Logs the previous value
                          return "home";
                        })
                      }
                    />
                  </Link>
                  <Link to="#skills">
                    <Tab
                      value="skills"
                      label="Skills"
                      style={{
                        color: value === "skills" ? "#feda6a" : "#ffffff",
                      }}
                      onClick={() =>
                        setValue((prevValue) => {
                          console.log(prevValue); // Logs the previous value
                          return "skills";
                        })
                      }
                    />
                  </Link>
                  <Link to="#projects">
                    {" "}
                    <Tab
                      value="projects"
                      label="Projects"
                      style={{
                        color: value === "projects" ? "#feda6a" : "#ffffff",
                      }}
                      onClick={() =>
                        setValue((prevValue) => {
                          console.log(prevValue); // Logs the previous value
                          return "projects";
                        })
                      }
                    />
                  </Link>
                  <Link to="#contact">
                    <Tab
                      value="contact"
                      label="Contact"
                      style={{
                        color: value === "contact" ? "#feda6a" : "#ffffff",
                      }}
                      onClick={() =>
                        setValue((prevValue) => {
                          console.log(prevValue); // Logs the previous value
                          return "contact";
                        })
                      }
                    />
                  </Link>

                  <Tab
                    value="cv"
                    label="Download Cv"
                    style={{
                      color: value === "cv" ? "#feda6a" : "#ffffff",
                    }}
                    onClick={() =>
                      setValue((prevValue) => {
                        console.log(prevValue); // Logs the previous value
                        return "cv";
                      })
                    }
                  />
                </Tabs>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <Grid container>
              <Grid
                item
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                md={6}
                sm={6}
              >
                <img src={logo} className="logoImage" />
                <Typography color="#feda6a">{props.children}</Typography>
              </Grid>
            </Grid>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { sm: "block", md: "none" } }} // Hide on medium and larger screens
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              onClick={toggleDrawer(false)}
              sx={{
                borderRadius: "10px 0 0 10px",
                width: "100%",
              }}
              PaperProps={{
                sx: {
                  borderRadius: "15px 0 0 15px",
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  webkitBackdropFilter: "blur(5px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                component="div"
                aria-label="secondary tabs example"
                sx={{
                  // ...gradientStyle,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Link to="#home">
                  <Tab
                    value="home"
                    label="Home"
                    style={{
                      color: value === "home" ? "#feda6a" : "#ffffff",
                    }}
                    onClick={() =>
                      setValue((prevValue) => {
                        console.log(prevValue); // Logs the previous value
                        return "home";
                      })
                    }
                  />
                </Link>
                <Link to="#skills">
                  <Tab
                    value="skills"
                    label="skills"
                    style={{
                      color: value === "skills" ? "#feda6a" : "#ffffff",
                    }}
                    onClick={() =>
                      setValue((prevValue) => {
                        console.log(prevValue); // Logs the previous value
                        return "skills";
                      })
                    }
                  />
                </Link>
                <Link to="#projects">
                  <Tab
                    value="projects"
                    label="Projects"
                    style={{
                      color: value === "projects" ? "#feda6a" : "#ffffff",
                    }}
                    onClick={() =>
                      setValue((prevValue) => {
                        console.log(prevValue); // Logs the previous value
                        return "projects";
                      })
                    }
                  />
                </Link>
                <Link to="#contact">
                  <Tab
                    value="contact"
                    label="Contact"
                    style={{
                      color: value === "contact" ? "#feda6a" : "#ffffff",
                    }}
                    onClick={() =>
                      setValue((prevValue) => {
                        console.log(prevValue); // Logs the previous value
                        return "contact";
                      })
                    }
                  />
                </Link>

                <Tab
                  value="cv"
                  label="Download Cv"
                  style={{
                    color: value === "cv" ? "#feda6a" : "#ffffff",
                  }}
                  onClick={() =>
                    setValue((prevValue) => {
                      console.log(prevValue); // Logs the previous value
                      return "cv";
                    })
                  }
                />
              </Tabs>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};