import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const Header = ({ alphabeticalOrder }) => {
  const [buttonState, setButtonState] = useState("outlined");

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
          List of Fruits
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Pick up the fruits of your choice and add it to cart and then head to
          checkout.{" "}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button  variant="contained">See nutritions table</Button>
          <div onClick={() => setButtonState("disabled")}>
            <Button onClick={alphabeticalOrder} variant={buttonState}>
              Alphabetical order
            </Button>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;