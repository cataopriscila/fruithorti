import { useEffect, useState } from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/NavBar";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/Home";

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

  //Add fruit to Shopping Cart
  const addToCart = (fruit, e) => {
    const fruitAlreadyAdded = (value) => value.id === fruit.id;
      if (cart.some(fruitAlreadyAdded)) {
        e.preventDefault();
      } else {
        setCart([
          ...cart,
          {
            ...fruit,
            quantity: 1,
            price: fruit.width * 0.001,
            totalPrice: fruit.width * 0.001,
          },
        ]);
      }
  };

  //Remove all items from Shopping Cart
  const emptyCart = () => {
    setFruits(fruits);
    setCart([]);
  };

  //Remove individual items from Shopping Cart
  const deleteItemFromCart = (checkout) => {
    setCart(checkout);
  };

  //Change App routes
  const onRouteChange = (route) => {
    switch (route) {
      case "fruitlist":
        setRoute("fruitlist");
        break;

      case "shoppingcart":
        setRoute("shoppingcart");
        break;
      default:
        return <h1>Route issues. Please Refresh the page</h1>;
    }
  };

  //Select fruit from Dropdown
  const onFruitSelect = (input) => {
    const selected = fruits.filter((fruit) => fruit.name === input);
    if (input) {
      setFruits(selected);
    }
  };

  //Order fruit list alphabetically
  const alphabeticalOrder = () => {
    //Due to browser CORS policy, an API server was implemented to serve this app.
    //Please run the API server locally or test out the windows fetch method
    //with the URL " https://www.fruityvice.com/api/fruit/all"
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) =>
        setFruits(
          data
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((fruit) => Object.assign(fruit, { label: fruit.name }))
        )
      )
      .catch((err) => console.log(err, "Unable to work with API"));
  };

  //Fetch fruit list from API
  useEffect(() => {
    //Due to browser CORS policy, an API server was implemented to serve this app.
    //Please run the API server locally or test out the windows fetch method
    //with the URL "https://www.fruityvice.com/api/fruit/all"
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) =>
        setFruits(
          data
            .sort((a, b) => a.id - b.id)
            .map((fruit) => Object.assign(fruit, { label: fruit.name }))
        )
      )
      .catch((err) => console.log(err, "Unable to work with API"));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar onRouteChange={onRouteChange} />
        <main>
          <Dropdown fruits={fruits} onFruitSelect={onFruitSelect} />
          {route === "fruitlist" ? (
            <Home
              alphabeticalOrder={alphabeticalOrder}
              fruits={fruits}
              onRouteChange={onRouteChange}
              addToCart={addToCart}
              text="List of Fruits"
              subtext="Pick up the fruits of your choice and add it to the cart and then head to the
            checkout."
            />
          ) : (
            <CheckoutPage
              cart={cart}              
              emptyCart={emptyCart}
              deleteItemFromCart={deleteItemFromCart}
              text="Shopping Cart"
              subtext="Add, remove or delete items from your list"
            />
          )}
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
