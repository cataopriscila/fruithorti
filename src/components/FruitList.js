import React from 'react';
import FruitCard from './FruitCard';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Fruitlist = ({fruits, onRouteChange, addToCart}) => {

    return (
        <Container sx={{ py: 8 }} maxWidth="md">            
            <Grid container spacing={5}>
            {fruits.map((fruit, i) => (
                <FruitCard
                  onRouteChange={onRouteChange}
                  addToCart={addToCart}                  
                  key={i}
                  fruit={fruit}
                />
              ))}

            </Grid>
          </Container>
    );
}

export default Fruitlist;
