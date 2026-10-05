import React, { useEffect, useState } from "react";
import { getTickets } from "../services/ticketsApi";
import { Button, Grid } from "@mui/material";
import TicketsCard from "../components/TicketsCard";
import TicketsModal from "../components/TicketsModal";

const TicketsPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fatch = async () => {
      try {
        const apiData = await getTickets();
        console.log(apiData);
        setData(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Tickets
      </Button>
      <Grid>
        {data.map((tickets) => (
          <TicketsCard
            key={tickets.id}
            id={tickets.id}
            subject={tickets.subject}
            priority={tickets.priority}
            status={tickets.status}
            requesterName={tickets.requesterName}
            requesterEmail={tickets.requesterEmail}
            messages={tickets.messages}
          />
        ))}
      </Grid>

      {open && <TicketsModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default TicketsPage;
