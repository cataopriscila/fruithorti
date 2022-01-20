import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.log('You clicked a breadcrumb.');
}

export default function Menu() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{color: 'white'}}>
        <Link underline="hover" color="inherit" href="/">
          Fruits
        </Link>
        <Link
          underline="hover" 
          color="inherit"         
          href="/getting-started/installation/"
        >
          Calories
        </Link>
        <Link
          underline="hover"          
          href="/components/breadcrumbs/"
          color="inherit"
          aria-current="page"
        >
          Shopping Cart
        </Link>
      </Breadcrumbs>
    </div>
  );
}
