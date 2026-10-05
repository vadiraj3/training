import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import { Button, Grid } from "@mui/material";
import ProductsCard from "../components/ProductsCard";
import ProductsModal from "../components/ProductsModal";

const ProductsPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const DataFatch = async () => {
      try {
        const apiData = await getProducts();
        console.log(apiData);
        setData(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    DataFatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Products
      </Button>

      <Grid container spacing={2}>
        {data.map((product) => (
          <ProductsCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            category={product.category}
            tags={product.tags}
          />
        ))}
      </Grid>

      {open && <ProductsModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default ProductsPage;
