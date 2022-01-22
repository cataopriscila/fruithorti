import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function Menu({ onRouteChange }) {
  const handleClick = (event) => {
    event.preventDefault();
    onRouteChange(event.target.id);
  };

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
        <Link
          id="fruitlist"
          underline="hover"
          color="inherit"
          href="/#fruitlist"
        >
          Fruits
        </Link>
        <Link
          id="shoppingcart"
          underline="hover"
          href="#shoppingcart"
          color="inherit"
          aria-current="page"
        >
          Shopping Cart
        </Link>
      </Breadcrumbs>
    </div>
  );
}
