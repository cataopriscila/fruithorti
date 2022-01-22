import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ShoppingCart({ cart, emptyCart }) {
  const [checkoutList, setCheckoutList] = useState([]);
  const [total, setTotal] = useState("0");

  const addItemButton = (name) => {
    const fruit = checkoutList.map((fruit) => {
      if (fruit.name === name) {
        return Object.assign(fruit, {
          quantity: fruit.quantity + 1,
          totalPrice: fruit.totalPrice + fruit.price,
        });
      }
      return fruit;
    });
    setCheckoutList(fruit);
  };

  const removeItemButton = (name) => {
    setCheckoutList(
      checkoutList.map((fruit) => {
        if (fruit.name === name && parseInt(fruit.quantity) !== 0) {
          return Object.assign(fruit, {
            quantity: fruit.quantity - 1,
            totalPrice: fruit.totalPrice - fruit.price,
          });
        }
        return fruit;
      })
    );
  };

  const deleteItem = () => {};

  const columns = [
    {
      field: "id",
      headerName: "Bar Code",
      type: "number",
      width: 120,
      editable: true,
    },

    {
      field: "add",
      headerName: "Add",
      width: 100,
      renderCell: (params) => (
        <strong>
          {params.value}
          <Button
            onClick={() => addItemButton(params.row.name)}
            variant="contained"
            color="primary"
            size="small"
          >
            +
          </Button>
        </strong>
      ),
    },

    { field: "quantity", headerName: "Quantity", width: 100 },
    {
      field: "remove",
      headerName: "Remove",
      width: 80,
      renderCell: (params) => (
        <strong>
          {params.value}
          <Button
            onClick={() => removeItemButton(params.row.name)}
            variant="contained"
            color="primary"
            size="small"
          >
            -
          </Button>
        </strong>
      ),
    },
    {
      field: "name",
      headerName: "Item",
      width: 280,
      editable: true,
    },

    {
      field: "price",
      headerName: "USD",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 80,
      valueGetter: (params) =>
        `${Number(params.row.quantity * params.row.price).toFixed(2) || "0"}`,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <strong>
          {params.value}
          <Button
            onClick={deleteItem}
            variant="outlined"
            color="primary"
            size="small"
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  useEffect(() => {
    setCheckoutList(cart);
  }, [cart]);

  useEffect(() => {
    let allTotal = checkoutList.reduce(
      (acc, fruit) => acc + fruit.totalPrice,
      0
    );
    setTotal(allTotal);    
  }, [checkoutList]);

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <div>
          <hr />
          <h1
            style={{
              font: 20,
              fontWeight: 700,
              textAlign: "center",
              margin: "40px",
            }}
          >
            Shopping Cart
          </h1>
        </div>
        <div style={{ height: "70vh", width: "100%" }}>
          <DataGrid
            rows={checkoutList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            hideFooterSelectedRowCount
          />
        </div>
        <Box
          sx={{
            backgroundColor: "whitesmoke",
            border: "1px solid lightgray",
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
            padding: "25px",
          }}
        >
          <Button onClick={emptyCart} variant="outlined" color="primary" size="medium">
            Empty cart
          </Button>
          <Typography
            sx={{
              backgroundColor: "white",
              padding: "14px",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >{`Total amount: $ ${Number(total).toFixed(2)}`}</Typography>
          <Button variant="contained" color="primary" size="medium">
            Go to Payment
          </Button>
        </Box>
      </Container>
    </>
  );
}