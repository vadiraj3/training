import { Box, Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ id, customer, items, shippingAddress }) => {
  const navigate = useNavigate();

  const handelDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/orders/${id}`,
      );
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid size={{ lg: 4 }}>
      <Card sx={{ border: "1px solid black" }}>
        <Typography variant="h5">customer</Typography>
        <Typography variant="subtitle2">{customer.name}</Typography>
        <Typography variant="subtitle2">{customer.email}</Typography>
        {items.map((item, index) => (
          <Box key={index}>
            <Typography variant="h5">items</Typography>
            <Typography variant="subtitle2">{item.sku}</Typography>
            <Typography variant="subtitle2">{item.name}</Typography>
            <Typography variant="subtitle2">{item.quantity}</Typography>
            <Typography variant="subtitle2">{item.price}</Typography>
          </Box>
        ))}
        <Typography variant="h5">shippingAddress</Typography>
        <Typography variant="subtitle2">{shippingAddress.line1}</Typography>
        <Typography variant="subtitle2">{shippingAddress.city}</Typography>
        <Typography variant="subtitle2">
          {shippingAddress.postalCode}
        </Typography>
        <button onClick={() => navigate(`/order-put-page/${id}`)}>
          Update
        </button>

        <button onClick={handelDelete}>Delete</button>
      </Card>
    </Grid>
  );
};

export default OrderCard;
