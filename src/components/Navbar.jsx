import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack direction="row" gap="20px" style={{ marginTop: "30px" }}>
      <Link to="/">
        <img
          src={Logo}
          alt=""
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        color="#000"
      >
        <Link to="/" style={{ color: "#000" }}>
          Home
        </Link>
        <Link to="/" style={{ color: "#000" }}>
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
