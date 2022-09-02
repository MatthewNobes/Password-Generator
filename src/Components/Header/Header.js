import { Typography } from "@mui/material";

const Header = () => (
  <header>
    <Typography
      aria-label="Header: Password Generator"
      variant="h2"
      component="h1"
      align="center"
      sx={{
        backgroundColor: "#282c34",
        color: "white",
        paddingX: 2,
        paddingY: 2,
      }}
    >
      Password Generator
    </Typography>
  </header>
);

export default Header;
