import { Box, Button, Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import "react";
import { useNavigate } from "react-router-dom";

const SupportCard = ({ id, subject, priority, requester, messages }) => {
  const navigate = useNavigate();

  const handelDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/support-tickets/${id}`,
      );
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(subject, priority, requester, messages);
  return (
    <Grid size={{ lg: 4 }} sx={{ cursor: "pointer" }}>
      <Card>
        <Box sx={{ border: "1px solid black", borderRadius: "5px" }}>
          <Typography>{id}</Typography>
          <Typography>{subject}</Typography>
          <Typography>{priority}</Typography>
          <Typography>{requester.name}</Typography>
          <Typography>{requester.email}</Typography>
          {messages.map((message, index) => (
            <Box key={index}>
              <Typography>{message.from}</Typography>
              <Typography>{message.body}</Typography>
              <Typography>{message.createdAt}</Typography>
            </Box>
          ))}
        </Box>
        <button onClick={() => navigate(`/support-put-page/${id}`)}>
          Update
        </button>

        <Button onClick={handelDelete}>Delete</Button>
      </Card>
    </Grid>
  );
};

export default SupportCard;
