import { Button, Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ id, name, email, phone }) => {
  const navigate = useNavigate();

  const handelDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/contacts/${id}`,
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
        <Typography variant="subtitle2">{email}</Typography>
        <Typography variant="subtitle2">{phone}</Typography>

        <button onClick={() => navigate(`/contact-put-page/${id}`)}>
          Update
        </button>

        <Button onClick={handelDelete}>Delete</Button>
      </Card>
    </Grid>
  );
};

export default ContactCard;
