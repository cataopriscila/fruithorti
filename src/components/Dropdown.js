import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";

export default function Dropdown({ fruits, onFruitSelect }) {
  return (
    <Container
      sx={{
        ml: "auto",
        mr: "auto",
      }}
      maxWidth="xs"
    >
      <Autocomplete
        disablePortal
        options={fruits}
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Fruits"
            onSelect={() => onFruitSelect(params.inputProps.value)}
          />
        )}
      />
    </Container>
  );
}
