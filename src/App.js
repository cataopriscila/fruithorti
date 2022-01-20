import { useEffect, useState } from "react";
import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/NavBar";
import Dropdown from "./components/Dropdown";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Fruitlist from "./components/FruitList";

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
    setCart([...cart, fruit]);
    console.log(fruit);
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
    const orderedFruits = fruits.sort((a, b) => a.name.localeCompare(b.name));
    setFruits(prevstate => ([...prevstate, orderedFruits]));
  }  

  useEffect(() => {
    console.log('useEffect from app')
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setFruits(data.sort((a, b) => a.id - b.id)));
  }, []);
  
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Header alphabeticalOrder={alphabeticalOrder} />
        <main>         
            <Dropdown fruits={fruits} />          
          <Fruitlist fruits={fruits} onRouteChange={onRouteChange} addToCart={addToCart} />            
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
