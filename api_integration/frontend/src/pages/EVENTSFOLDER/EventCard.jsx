import { Box, Button, Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({
  id,
  title,
  date,
  location,
  attendees,
  createdAt,
  updatedAt,
}) => {
  const navigate = useNavigate();

  const handelDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/events/${id}`,
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid size={{ lg: 4 }} sx={{ cursor: "pointer" }}>
      <Card>
        <Box sx={{ border: "1px solid black", borderRadius: "5px" }}>
          <Typography>{id}</Typography>
          <Typography>{title}</Typography>
          <Typography>{date}</Typography>
          <Typography>{location}</Typography>
          {attendees.map((aten) => (
            <Typography>{aten}</Typography>
          ))}
          <Typography>{createdAt}</Typography>
          <Typography>{updatedAt}</Typography>
        </Box>
        <button onClick={() => navigate(`/event-put-page/${id}`)}>
          Update
        </button>

        <Button onClick={handelDelete}>Delete</Button>
      </Card>
    </Grid>
  );
};

export default EventCard;
