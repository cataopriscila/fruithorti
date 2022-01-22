import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/cataopriscila/fruithorti">
        FruitHorti
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        This is FruitHorti: from farm, for you!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Enjoy your shopping!
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
