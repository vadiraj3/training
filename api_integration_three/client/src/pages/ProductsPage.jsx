import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import ProductsModal from "../components/ProductsModal";
import { useGetProductsQuery } from "../store/api/productsApi";
import ProductsCard from "../components/ProductsCard";

const ProductsPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

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
