import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

//Reusable Header Component
const Header = ({ alphabeticalOrder, hasButton, text, subtext, buttonText }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ margin: 5 }}
          gutterBottom
        >
          {text}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {subtext}
        </Typography>
        {hasButton ? (
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button onClick={alphabeticalOrder} variant="contained">
              {buttonText[0]}
            </Button>
            <Button onClick={alphabeticalOrder} variant="outlined">
              {buttonText[1]}
            </Button>
          </Stack>
        ) : (
          <div />
        )}
      </Container>
    </Box>
  );
};

export default Header;
