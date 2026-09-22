import React, { useEffect, useState } from "react";
import { getordersInsights } from "../../services/api";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";

const OrderGetPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fatch = async () => {
      try {
        const apiData = await getordersInsights();
        console.log(apiData);
        setData(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <Grid container spacing={2}>
      <button onClick={() => navigate("/order-post-page")}>
        Add New Order
      </button>
      {data.map((order) => (
        <OrderCard
          key={order.id}
          id={order.id}
          customer={order.customer}
          items={order.items}
          shippingAddress={order.shippingAddress}
        />
      ))}
    </Grid>
  );
};

export default OrderGetPage;
