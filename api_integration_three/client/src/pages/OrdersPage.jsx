import React, { useState } from "react";
import { useGetOrdersQuery } from "../store/api/ordersApi";
import { Button, Grid } from "@mui/material";
import OrderCard from "../components/OrderCard";
import OrderModal from "../components/OrderModal";

const OrdersPage = () => {
  const { data, isLoading, isError } = useGetOrdersQuery();

  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Orders
      </Button>
      <Grid container spacing={2}>
        {data.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            customerName={order.customerName}
            customerEmail={order.customerEmail}
            status={order.status}
            shippingCity={order.shippingCity}
            items={order.items}
          />
        ))}
      </Grid>

      {open && <OrderModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default OrdersPage;
