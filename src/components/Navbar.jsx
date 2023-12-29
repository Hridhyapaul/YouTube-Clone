import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { Box, Typography } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Box display="flex" alignItems="center" gap={1}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="" height={45} />
      </Link>
      <Typography
        sx={{
          display: { xs: "none", md: "block" },
        }}
        variant="h5"
        fontWeight="bold"
        color="white"
      >
        VideoTube
      </Typography>
    </Box>
    <SearchBar></SearchBar>
  </Stack>
);

export default Navbar;
