import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderPutPage = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({ name: "", email: "" });
  const [items, setItems] = useState([]);
  const [itemObject, setItemObject] = useState({
    sku: "",
    name: "",
    quantity: "",
    price: "",
  });
  const [shippingAddress, setShippingAddress] = useState({
    line1: "",
    city: "",
    postalCode: "",
  });

  const handelItems = () => {
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

  const params = useParams();

  useEffect(() => {
    const fatch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/records/orders/${params.id}`,
        );
        const { customer, items, shippingAddress } = response.data;
        setCustomer(customer);
        setItems(items);
        setShippingAddress(shippingAddress);
      } catch (error) {
        console.log(error);
      }
    };
    fatch();
  }, []);

  const handelSubmit = async () => {
    if (customer.name.trim() === "") {
      console.log("Please enter customer name");
      return;
    }
    if (!customer.email.includes("@")) {
      console.log("Please enter @ symbole here");
      return;
    }
    if (!itemObject.sku.trim() === "") {
      console.log("Please enter SKU here");
      return;
    }
    if (itemObject.name.trim() === "") {
      console.log("please enter ItemsName here");
      return;
    }
    if (itemObject.quantity.trim() === "") {
      console.log("Please enter Quantity here");
      return;
    }
    if (itemObject.price.length === "") {
      console.log("please enter price here");
      return;
    }
    if (shippingAddress.line1.trim() === "") {
      console.log("please enter line1 here");
      return;
    }
    if (shippingAddress.city.trim() === "") {
      console.log("please enter city name here");
      return;
    }
    if (shippingAddress.postalCode.trim() === "") {
      console.log("please enter postalCode here");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/orders/${params.id}`,
        {
          customer: customer,
          items: items,
          shippingAddress: shippingAddress,
        },
      );
      console.log("Data Submitted Successfully", response.data.massege);
      navigate("/order-get-page");
    } catch (error) {
      console.error(
        "Error Data Submitted",
        error.response?.data || error.massege,
      );
    }
  };

  const handelEditItems = (itemObject) => {
    setItemObject({
      sku: itemObject.sku,
      name: itemObject.name,
      quantity: itemObject.quantity,
      price: itemObject.price,
    });
  };

  const handelDeleteItems = (name) => {
    const newItems = items.filter((item) => {
      return item.name !== name;
    });
    setItems(newItems);
  };

  return (
    <div>
      <h1>Customer</h1>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
      />
      <br />
      <br />
      <label>Email: </label>
      <input
        type="text"
        name="email"
        value={customer.email}
        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
      />
      <br />
      <br />
      <h1>Items</h1>
      <label>Sku: </label>
      <input
        type="text"
        name="sku"
        value={itemObject.sku}
        onChange={(e) => setItemObject({ ...itemObject, sku: e.target.value })}
      />
      <br />
      <br />
      <label>name: </label>
      <input
        type="text"
        name="name"
        value={itemObject.name}
        onChange={(e) => setItemObject({ ...itemObject, name: e.target.value })}
      />
      <br />
      <br />
      <label>Quantity: </label>
      <input
        type="number"
        name="quantity"
        value={itemObject.quantity}
        onChange={(e) =>
          setItemObject({ ...itemObject, quantity: e.target.value })
        }
      />
      <br />
      <br />
      <label>Price: </label>
      <input
        type="text"
        name="price"
        value={itemObject.price}
        onChange={(e) =>
          setItemObject({ ...itemObject, price: e.target.value })
        }
      />
      <br />
      <br />
      <button onClick={handelItems}>Add Items</button>

      <div>{items.length > 0 && <h3>Items Added</h3>}</div>
      {items.map((item, index) => (
        <Box key={index}>
          <Typography variant="h5">{item.sku}</Typography>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="h5">{item.quantity}</Typography>
          <Typography variant="h5">{item.price}</Typography>

          <Button onClick={() => handelEditItems(item)} sx={{ mr: 2 }}>
            Edit
          </Button>
          <Button onClick={() => handelDeleteItems(item.name)}>Delete</Button>
        </Box>
      ))}
      <br />
      <br />
      <h1>shippingAddress</h1>
      <label>line1: </label>
      <input
        type="text"
        name="line1"
        value={shippingAddress.line1}
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, line1: e.target.value })
        }
      />
      <br />
      <br />
      <label>City: </label>
      <input
        type="text"
        name="city"
        value={shippingAddress.city}
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, city: e.target.value })
        }
      />
      <br />
      <br />
      <label>postalCode: </label>
      <input
        type="number"
        name="postalCode"
        value={shippingAddress.postalCode}
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
        }
      />
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default OrderPutPage;
