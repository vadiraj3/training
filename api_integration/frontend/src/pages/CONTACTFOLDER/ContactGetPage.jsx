import React, { useEffect, useState } from "react";
import { getProfileInsights } from "../../services/api";
import { Button, Grid } from "@mui/material";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

const ContactGetPage = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fatch = async () => {
      try {
        const apiData = await getProfileInsights();
        console.log(apiData);
        setContacts(apiData.data.contacts);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fatch();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  console.log(contacts);
  return (
    <Grid container spacing={2}>
      {contacts.map((get) => (
        <ContactCard
          key={get.id}
          id={get.id}
          name={get.name}
          email={get.email}
          phone={get.phone}
        />
      ))}
      <Button onClick={() => navigate("/contact-post-page")}>
        Add New Contacts
      </Button>
    </Grid>
  );
};

export default ContactGetPage;
