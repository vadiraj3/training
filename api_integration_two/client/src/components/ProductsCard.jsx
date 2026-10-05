import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { deleteProduct } from "../services/productsApi";
import ProductsModal from "./ProductsModal";

const ProductsCard = ({ id, name, price, inStock, category, tags }) => {
  const [productModalOpen, setProductModalOpen] = useState(false);

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await deleteProduct(id);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2">{price}</Typography>
          <Typography variant="subtitle2">
            InStock {inStock ? "" : ""}
          </Typography>
          <Typography variant="subtitle2">{category}</Typography>
          {tags.map((tag, index) => (
            <Box key={index}>
              <Typography variant="subtitle2">{tag}</Typography>
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
          <Button variant="contained" onClick={() => setProductModalOpen(true)}>
            Edit
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Card>

      {productModalOpen && (
        <ProductsModal
          open={productModalOpen}
          setOpen={setProductModalOpen}
          id={id}
          propName={name}
          propPrice={price}
          propInStock={inStock}
          propCategory={category}
          propTags={tags}
        />
      )}
    </Grid>
  );
};

export default ProductsCard;
