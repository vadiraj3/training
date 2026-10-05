import React, { useEffect, useState } from "react";
import { getOrders } from "../services/ordersApi";
import { Button, Grid } from "@mui/material";
import OrderCard from "../components/OrderCard";
import OrderModal from "../components/OrderModal";

const OrdersPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apiData = await getOrders();
        console.log(apiData);
        setData(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    dataFatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Somethind went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Orders
      </Button>
      <Grid>
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
