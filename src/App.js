import { useEffect, useState } from "react";
import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/NavBar";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Fruitlist from "./components/FruitList";
import ShoppingCart from "./components/ShoppingCart";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#145DA0",
        },
      },
    },
  },
});

function App() {
  const [fruits, setFruits] = useState([]);  
  const [route, setRoute] = useState("fruitlist");
  const [cart, setCart] = useState([]);

  const addToCart = (fruit) => {       
    setCart([...cart, {...fruit, quantity: 1, price: fruit.width * 0.001, totalPrice: fruit.width * 0.001 }]);
    console.log('addToCart', cart);    
    
  };

    const emptyCart = () => {
    setFruits(fruits);
    setCart([]);
  };

  const onRouteChange = (route) => {
    switch (route) {
      case "fruitlist":
        setRoute("fruitlist");
        return null;
      case "checkout":
        setRoute("checkout");
        return null;

      default:
        return "Route issues. Please Refresh the page";
    }
  };

   
  const alphabeticalOrder = () => { 
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setFruits(data.sort((a, b) => a.name.localeCompare(b.name)).map(fruit => Object.assign(fruit, {label: fruit.name}))))
      .catch(err => console.log(err, 'Unable to work with API'))             
  } 
  
  const onFruitSelect = (input) => {    
    const selected = fruits.filter(fruit => fruit.name === input);  
    if(input){
      setFruits(selected); 
    }     
   }

  const onDropdownClick = () => {
    setFruits(fruits);
  } 
   

  
  useEffect(() => {     
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setFruits(data.sort((a, b) => a.id - b.id).map(fruit => Object.assign(fruit, {label: fruit.name}))))
      .catch(err => console.log(err, 'Unable to work with API'))      
  }, []);

 
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Header alphabeticalOrder={alphabeticalOrder} />
        <main>         
          <Dropdown fruits={fruits} onFruitSelect={onFruitSelect} onDropdownClick={onDropdownClick} />            
          <Fruitlist fruits={fruits} onRouteChange={onRouteChange} addToCart={addToCart} /> 
          
          <ShoppingCart cart={cart} emptyCart={emptyCart}/>           
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;