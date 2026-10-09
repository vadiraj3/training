import React, { useState } from "react";
import { useGetTicketsQuery } from "../store/api/ticketsApi";
import { Button, Grid } from "@mui/material";
import TicketCard from "../components/TicketCard";
import TicketModal from "../components/TicketModal";

const TicketsPage = () => {
  const { data, isLoading, isError } = useGetTicketsQuery();

  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Tickets
      </Button>
      <Grid container spacing={2}>
        {data.map((ticket) => (
          <TicketCard
            key={ticket.id}
            id={ticket.id}
            subject={ticket.subject}
            priority={ticket.priority}
            status={ticket.status}
            requesterName={ticket.requesterName}
            requesterEmail={ticket.requesterEmail}
            messages={ticket.messages}
          />
        ))}
      </Grid>

      {open && <TicketModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default TicketsPage;
