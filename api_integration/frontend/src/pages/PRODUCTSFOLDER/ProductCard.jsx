import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price, instock, tags }) => {
  const navigate = useNavigate();

  const handelDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/${id}`,
      );
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle2">{price}</Typography>
        <Typography variant="subtitle2">{instock}</Typography>
        {tags.map((tag) => (
          <Typography variant="subtitle2">{tag}</Typography>
        ))}

        <button onClick={() => navigate(`/product-put-page/${id}`)}>
          Update
        </button>

        <button onClick={handelDelete}>Delete</button>
      </Card>
    </Grid>
  );
};

export default ProductCard;
