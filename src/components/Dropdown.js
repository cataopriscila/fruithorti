import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";

export default function Dropdown({fruits}) {
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
      options={top100Films}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Fruits" onSelect={()=> console.log('select')} />}
    />
    </Container>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },  
];
