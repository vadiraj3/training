import React, { useEffect, useState } from "react";
import { getProductsInsights } from "../../services/api";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductGetPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fatch = async () => {
      try {
        const apiData = await getProductsInsights();
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
    return <div>Error...</div>;
  }
  return (
    <Grid container spacing={2}>
      <button onClick={() => navigate("/product-post-page")}>
        Add New Products
      </button>
      {data.map((pro) => (
        <ProductCard
          key={pro.id}
          id={pro.id}
          name={pro.name}
          price={pro.price}
          instock={pro.instock}
          tags={pro.tags}
        />
      ))}
    </Grid>
  );
};

export default ProductGetPage;
