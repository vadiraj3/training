import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { deleteOrders } from "../services/ordersApi";
import OrderModal from "./OrderModal";

const OrderCard = ({
  id,
  customerName,
  customerEmail,
  status,
  shippingCity,
  items,
}) => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await deleteOrders(id);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">{customerName}</Typography>
          <Typography variant="subtitle2">{customerEmail}</Typography>
          <Typography variant="subtitle2">{status}</Typography>
          <Typography variant="subtitle2">{shippingCity}</Typography>
          {items.map((item, index) => (
            <Box key={index}>
              <Typography variant="subtitle2">{item.sku}</Typography>
              <Typography variant="subtitle2">{item.name}</Typography>
              <Typography variant="subtitle2">{item.quantity}</Typography>
              <Typography variant="subtitle2">{item.price}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={() => setOrderModalOpen(true)}>
            Edit
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Card>

      {orderModalOpen && (
        <OrderModal
          open={orderModalOpen}
          setOpen={setOrderModalOpen}
          id={id}
          propCustomerName={customerName}
          propCustomerEmail={customerEmail}
          propStatus={status}
          propShippingCity={shippingCity}
          propItems={items}
        />
      )}
    </Grid>
  );
};

export default OrderCard;
