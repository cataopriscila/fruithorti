import React, {useState, useEffect} from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CircularProgress, Typography} from "@mui/material";
import unsplash from "../api/unsplash";
import NutritionPopup from "./NutritionPopup";

const FruitCard = ({ fruit, onRouteChange, addToCart }) => {
  const [fruitDetails, setFruitDetails] = useState(fruit);  
  const [nutriFacts, setNutriFacts] = useState([]);
  const [fruitToBeAdded, setFruitToBeAdded] = useState(true);


  const handleClick = (e) => {
    setFruitToBeAdded(false);
    addToCart(fruitDetails, e);
  }

 useEffect(()=> {
   
  if(fruit.nutritions){
    setNutriFacts(Object.entries(fruit.nutritions).map(nutri => nutri.join(': ')));
  }
 },[fruit.nutritions])
  
  useEffect(() => {  
     
    if(fruit.name) {
      unsplash
      .get("/search/photos", {
        params: { query: fruit.name },
      }).then((response) => {setFruitDetails(prev => ({...prev,...response.data.results[0]}))}); 
    }   
  }, [fruit.name]);

   return ( 
    <>
     {fruitDetails.urls?
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
          {fruitToBeAdded? 
            <Button onClick={(e) => handleClick(e)} size="small">Add</Button>
            :
            <Button variant="disabled" size="small">Added</Button>
          }
            
            <Button onClick={()=> onRouteChange('shoppingcart')} size="small">Cart</Button>
            <NutritionPopup fruitDetails={fruitDetails} nutriFacts={nutriFacts} />
           
          </CardActions>
        </Card>
      </Grid>
     )
      :
      (<Grid item xs={12} sm={6} md={4}><CircularProgress/></Grid>)
    } 
    </>   
      
  );
};

export default FruitCard;
