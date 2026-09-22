import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPostPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

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
      const response = await axios.post("http://localhost:3000/api/contacts", {
        name: name,
        email: email,
        phone: phone,
      });
      console.log("Data Submitted Successfylly", response.data.massage);
      navigate("/contact-get-page");
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

export default ContactPostPage;
