import {
  Box,
  Button,
  Card,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createProduct, updateProduct } from "../services/productsApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  height: "90vh",
};

const ProductsModal = ({
  id = null,
  open,
  setOpen,
  propName = "",
  propPrice = "",
  propInStock = "",
  propCategory = "",
  propTags = [],
}) => {
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [tagItems, setTagItems] = useState("");

  useEffect(() => {
    if (id !== null) {
      setName(propName);
      setPrice(propPrice);
      setInStock(propInStock);
      setCategory(propCategory);
      setTags(propTags);
    }
  }, [id]);

  const handleTagItems = () => {
    if (tagItems === "") {
      alert("please enter tags here");
      return;
    }
    setTags([...tags, tagItems]);
    setTagItems("");
  };

  const handleDeleteTags = (itemTag) => {
    const newItems = tags.filter((tag) => tag !== itemTag);
    setTags(newItems);
  };

  const handleSubmit = async () => {
    if (name.trim() === "") {
      alert("please enter name here");
      return;
    }
    if (price.trim() === "") {
      alert("please enter price here");
      return;
    }
    if (category.trim() === "") {
      alert("please enter category here");
      return;
    }

    const payload = {
      name: name,
      price: price,
      inStock: inStock,
      category: category,
      tags: tags,
    };

    try {
      if (id === null) {
        const response = await createProduct(payload);
        console.log("Data Submitted Successfylly");
      } else {
        const response = await updateProduct(id, payload);
        console.log("Updated");
        location.reload();
      }
      handleClose();
    } catch (error) {
      console.error(
        "Error Data Submitted",
        error.response?.data || error.message,
      );
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card>
          <Typography variant="h6" gutterBottom>
            {id === null ? "Create" : "Update"} Product
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <TextField
              label="inStock"
              value={inStock}
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
            <TextField
              label="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {/* Display tag iteams */}
            {/* Add delete button and cal handle delete tag function send name */}
            <Box>
              {tags.length > 0 && <h3>Add Tags</h3>}
              {tags.map((tag, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Typography variant="subtitle2">{tag}</Typography>
                  <Button onClick={() => handleDeleteTags(tag)}>Delete</Button>
                </Box>
              ))}
            </Box>
            <TextField
              label="tagItem"
              type="text"
              value={tagItems}
              onChange={(e) => setTagItems(e.target.value)}
            />

            <Button variant="contained" onClick={handleTagItems} sx={{ mb: 2 }}>
              Add TagItems
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              {id === null ? "Submit" : "Update"}
            </Button>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default ProductsModal;
