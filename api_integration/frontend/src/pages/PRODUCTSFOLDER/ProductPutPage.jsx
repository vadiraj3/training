import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductPutPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);
  const [tags, setTags] = useState([]);
  const [productPut, setProductPut] = useState({});

  const navigate = useNavigate();
  const handelTags = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setTags([...tags, value]);
    } else {
      setTags(tags.filter((tag) => tag !== value));
    }
  };

  const params = useParams();

  useEffect(() => {
    const fatch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/records/products/${params.id}`,
        );
        setProductPut(response.id);
        const { name, price, inStock, tags } = response.data;
        setName(name);
        setPrice(price);
        setInStock(inStock);
        setTags(tags);
      } catch (error) {
        console.log(error);
      }
    };
    fatch();
  }, []);

  const handelSubmit = async () => {
    if (name.trim() === "") {
      console.log("Please enter material name");
      return;
    }
    if (price.trim() === "") {
      console.log("please enter price here");
      return;
    }
    if (tags.length === 0) {
      console.log("Please select at least one tag.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/products/${params.id}`,
        {
          name: name,
          price: price,
          inStock: inStock,
          tags: tags,
        },
      );
      navigate("/product-get-page");
      console.log("Data submitted successfully", response.data.massage);
    } catch (error) {
      console.error(
        "Error Data Submitted",
        error.response?.data || error.massage,
      );
    }
  };

  return (
    <div>
      <label>Name :</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label>Price :</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <br />
      <label>Instock :</label>
      <input
        type="checkbox"
        name="instock"
        checked={inStock}
        onChange={(e) => setInStock(e.target.checked)}
      />
      Instock
      <br />
      <br />
      <label>Tags :</label>
      <input
        type="checkbox"
        name="electronics"
        value={"electronics"}
        checked={tags.includes("electronics")}
        onChange={handelTags}
      />
      electronics
      <br />
      <br />
      <input
        type="checkbox"
        name="office"
        value={"office"}
        checked={tags.includes("office")}
        onChange={handelTags}
      />
      office
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default ProductPutPage;
