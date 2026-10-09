import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDeleteTicketsMutation } from "../store/api/ticketsApi";
import TicketModal from "./TicketModal";

function TicketCard({
  id,
  subject,
  priority,
  status,
  requesterName,
  requesterEmail,
  messages,
}) {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  const [ticketDelete] = useDeleteTicketsMutation();

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      await ticketDelete(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <Box p={2}>
          <Typography variant="h6">{subject}</Typography>
          <Typography variant="subtitle2">{priority}</Typography>
          <Typography variant="subtitle2">{status}</Typography>
          <Typography variant="subtitle2">{requesterName}</Typography>
          <Typography variant="subtitle2">{requesterEmail}</Typography>
          {messages.map((mess, index) => (
            <Box key={index}>
              <Typography variant="subtitle2">{mess.from}</Typography>
              <Typography variant="subtitle2">{mess.body}</Typography>
              <Typography variant="subtitle2">{mess.createdAt}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={() => setTicketModalOpen(true)}>
            Edit
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Card>

      {ticketModalOpen && (
        <TicketModal
          open={ticketModalOpen}
          setOpen={setTicketModalOpen}
          id={id}
          propSubject={subject}
          propPriority={priority}
          propStatus={status}
          propRequesterName={requesterName}
          propRequesterEmail={requesterEmail}
          propMessages={messages}
        />
      )}
    </Grid>
  );
}

export default TicketCard;
