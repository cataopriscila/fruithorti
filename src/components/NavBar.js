import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Menu from "./Menu";

const Navbar = ({ onRouteChange }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" noWrap>
          FruitHorti
        </Typography>
        <Menu onRouteChange={onRouteChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
