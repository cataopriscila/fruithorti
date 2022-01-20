import React, {useState, useEffect} from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import {CircularProgress, Typography} from "@mui/material";
import unsplash from "../api/unsplash";

const FruitCard = ({ fruit, onRouteChange, addToCart }) => {
  const [fruitDetails, setFruitDetails] = useState(null);   

  useEffect(() => { 
    console.log('useEffect from fruitCard')
    if(fruit.name) {
      unsplash
      .get("/search/photos", {
        params: { query: fruit.name },
      })
      .then((response) => {setFruitDetails({...response.data.results[0], name: fruit.name, nutritions: fruit.nutritions})}); 
    }   
        
  }, [fruit.name, fruit.nutritions]);

  return ( 
    <>
     {fruitDetails?
      ( 
        <Grid item xs={12} sm={6} md={4}>    
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >          
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "10%",
              height: "200px",
            }}
            image={fruitDetails.urls.small}
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {fruitDetails.name}
            </Typography>
            <Typography>{`USD ${(fruitDetails.width * 0.001).toFixed(2)} / kg`}</Typography>
            <Typography>{fruitDetails.alt_description}</Typography>            
          </CardContent>
          <CardActions>
            <Button onClick={() => addToCart(fruitDetails)} size="small">Add</Button>
            <Button onClick={()=> onRouteChange('checkout')} size="small">Checkout</Button>
          </CardActions>
        </Card>
      </Grid>
     )
      :
      (<Grid item xs={12} sm={6} md={4}><CircularProgress/></Grid> )
    } 
    </>   
      
  );
};

export default FruitCard;
