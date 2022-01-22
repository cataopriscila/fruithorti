import React from "react";
import Dropdown from "../components/Dropdown";
import Fruitlist from "../components/FruitList";
import Header from "../components/Header";

const Home = ({
  text,
  subtext,
  alphabeticalOrder,
  fruits,
  onRouteChange,
  addToCart,
  onFruitSelect
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
      <Dropdown fruits={fruits} onFruitSelect={onFruitSelect} />
      <Fruitlist
        fruits={fruits}
        onRouteChange={onRouteChange}
        addToCart={addToCart}
      />
    </>
  );
};

export default Home;
