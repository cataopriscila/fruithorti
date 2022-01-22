import React from "react";
import Fruitlist from "../components/FruitList";
import Header from "../components/Header";

const Home = ({
  text,
  subtext,
  alphabeticalOrder,
  fruits,
  onRouteChange,
  addToCart,
}) => {
  return (
    <>
      <Header
        text={text}
        subtext={subtext}
        hasButton
        alphabeticalOrder={alphabeticalOrder}
        buttonText={["All fruits","Alphabetical order"]}
      />
      <Fruitlist
        fruits={fruits}
        onRouteChange={onRouteChange}
        addToCart={addToCart}
      />
    </>
  );
};

export default Home;
