import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex", gap: "3rem" }}>
      Navbar
      <NavLink to="/about">
        <Card sx={{ p: 10, bgcolor: "blue" }}>About</Card>
      </NavLink>
      <NavLink to="/home">
        <Card sx={{ p: 10, bgcolor: "blue" }}>Home</Card>
      </NavLink>
      <Outlet />
    </Box>
  );
}
