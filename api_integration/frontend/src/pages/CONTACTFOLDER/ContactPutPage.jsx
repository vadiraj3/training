import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactPutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPut, setContactPut] = useState({});
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    const fatch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/records/contacts/${params.id}`,
        );
        setContactPut(response.id);
        const { name, email, phone } = response.data;
        setName(name);
        setEmail(email);
        setPhone(phone);
      } catch (error) {
        console.log(error);
      }
    };
    fatch();
  }, []);

  const handelSubmit = async () => {
    if (name.trim() === "") {
      console.log("Please enter name here");
      return;
    }
    if (!email.includes("@")) {
      console.log("Please add @ symbol");
      return;
    }
    if (phone.length < 10) {
      console.log("please enter 10 numbers");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/contacts/${params.id}`,
        {
          name: name,
          email: email,
          phone: phone,
        },
      );
      navigate("/contact-get-page");
      console.log("Data Submitted Successfylly", response.data.massage);
    } catch (error) {
      console.error(
        "Error data submitted",
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
      <label>Email :</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>Phone :</label>
      <input
        type="number"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default ContactPutPage;
