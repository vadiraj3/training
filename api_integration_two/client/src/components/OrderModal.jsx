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
import { createOrders, updateOrders } from "../services/ordersApi";

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

const OrderModal = ({
  id = null,
  open,
  setOpen,
  propCustomerName = "",
  propCustomerEmail = "",
  propStatus = "",
  propShippingCity = "",
  propItems = [],
}) => {
  const handleClose = () => setOpen(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [status, setStatus] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [items, setItems] = useState([]);
  const [itemObject, setItemObject] = useState({
    sku: "",
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    if (id !== null) {
      setCustomerName(propCustomerName);
      setCustomerEmail(propCustomerEmail);
      setStatus(propStatus);
      setShippingCity(propShippingCity);
      setItems(propItems);
    }
  }, [id]);

  const handleSubItems = () => {
    if (itemObject.sku === "") {
      alert("please enter sku here");
      return;
    }
    if (itemObject.name === "") {
      alert("please enter name here");
      return;
    }
    if (itemObject.quantity === "") {
      alert("please enter quantity here");
      return;
    }
    if (itemObject.price === "") {
      alert("please enter price here");
      return;
    }
    setItems([
      ...items,
      {
        sku: itemObject.sku,
        name: itemObject.name,
        quantity: itemObject.quantity,
        price: itemObject.price,
      },
    ]);
    setItemObject({
      sku: "",
      name: "",
      quantity: "",
      price: "",
    });
  };

  const handleDeleteItems = (nameItem) => {
    const newItems = items.filter((item) => item !== nameItem);
    setItems(newItems);
  };

  const handleSubmit = async () => {
    if (customerName.trim() === "") {
      alert("please enter CusterName here");
      return;
    }
    if (!customerEmail.includes("@")) {
      alert("please enter @ symbol here");
      return;
    }

    if (shippingCity.trim() === "") {
      alert("please enter shippingCity here");
      return;
    }

    const payload = {
      customerName: customerName,
      customerEmail: customerEmail,
      status: status,
      shippingCity: shippingCity,
      items: items,
    };

    try {
      if (id === null) {
        const response = await createOrders(payload);
        alert("Data Submitted Successfully");
        location.reload();
      } else {
        const response = await updateOrders(id, payload);
        alert("Updated");
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
            {id === null ? "Create" : "Update"} Todos
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="customerName"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <TextField
              label="customerEmail"
              type="text"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />

            <TextField
              label="status"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <TextField
              label="shippingCity"
              type="text"
              value={shippingCity}
              onChange={(e) => setShippingCity(e.target.value)}
            />
            {/* Display tag iteams */}
            {/* Add delete button and cal handle delete tag function send name */}
            <Box>
              {items.length > 0 && <h3>Add Items</h3>}
              {items.map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Typography variant="subtitle2">{item.sku}</Typography>
                  <Typography variant="subtitle2">{item.name}</Typography>
                  <Typography variant="subtitle2">{item.quantity}</Typography>
                  <Typography variant="subtitle2">{item.price}</Typography>

                  <Button onClick={() => handleDeleteItems(item)}>
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
            <h3>Items</h3>
            <TextField
              label="sku"
              type="text"
              value={itemObject.sku}
              onChange={(e) =>
                setItemObject({ ...itemObject, sku: e.target.value })
              }
            />
            <TextField
              label="name"
              type="text"
              value={itemObject.name}
              onChange={(e) =>
                setItemObject({ ...itemObject, name: e.target.value })
              }
            />
            <TextField
              label="quantity"
              type="text"
              value={itemObject.quantity}
              onChange={(e) =>
                setItemObject({ ...itemObject, quantity: e.target.value })
              }
            />
            <TextField
              label="price"
              type="number"
              value={itemObject.price}
              onChange={(e) =>
                setItemObject({ ...itemObject, price: e.target.value })
              }
            />

            <Button variant="contained" onClick={handleSubItems} sx={{ mb: 2 }}>
              Add Items
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

export default OrderModal;
