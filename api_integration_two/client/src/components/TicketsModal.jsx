import {
  Box,
  Button,
  Card,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTickets, updateTickets } from "../services/ticketsApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  height: "110vh",
};

const TicketsModal = ({
  id,
  open,
  setOpen,
  propSubject = "",
  propPriority = "",
  propStatus = "",
  propRequesterName = "",
  propRequesterEmail = "",
  propMessages = [],
}) => {
  const handleClose = () => setOpen(false);
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageObject, setMessageObject] = useState({
    from: "",
    body: "",
    createdAt: "",
  });

  useEffect(() => {
    if (id !== null) {
      setSubject(propSubject);
      setPriority(propPriority);
      setStatus(propStatus);
      setRequesterName(propRequesterName);
      setRequesterEmail(propRequesterEmail);
      setMessages(propMessages);
    }
  }, [id]);

  const handleAddMessages = () => {
    if (messageObject.from === "") {
      alert("please enter from here");
      return;
    }
    if (messageObject.body === "") {
      alert("please enter body here");
      return;
    }
    if (!messageObject.createdAt) {
      alert("please enter createdAt here");
      return;
    }
    setMessages([
      ...messages,
      {
        from: messageObject.from,
        body: messageObject.body,
        createdAt: messageObject.createdAt,
      },
    ]);
    setMessageObject({
      from: "",
      body: "",
      createdAt: "",
    });
  };

  const handleDeleteMessages = (body) => {
    const newMessage = messages.filter((mess) => mess !== body);
    setMessages(newMessage);
  };

  const handleSubmit = async () => {
    if (subject.trim() === "") {
      alert("Please enter subject here");
      return;
    }
    if (priority.trim() === "") {
      alert("please enter Priority here");
      return;
    }
    if (status.trim() === "") {
      alert("please enter status here");
      return;
    }
    if (requesterName.trim() === "") {
      alert("please enter requesterName here");
      return;
    }
    if (!requesterEmail.includes("@")) {
      alert("please enter requesterEmail here");
      return;
    }

    const payload = {
      subject: subject,
      priority: priority,
      status: status,
      requesterName: requesterName,
      requesterEmail: requesterEmail,
      messages: messages,
    };

    try {
      if (id === null) {
        const response = await createTickets(payload);
        console.log("Data Submitted Successfully");
      } else {
        const response = await updateTickets(id, payload);
        console.log("Data Submitted Successfully");
        location.reload();
      }
      handleClose();
    } catch (error) {
      console.error(
        "error data submitted",
        error.response?.data || error.message,
      );
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card>
          <Typography variant="h6" gutterBottom>
            {id === null ? "Create" : "Update"} Tickets
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              label="priority"
              type="text"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />

            <TextField
              label="status"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <TextField
              label="requesterName"
              type="text"
              value={requesterName}
              onChange={(e) => setRequesterName(e.target.value)}
            />
            <TextField
              label="requesterEmail"
              type="text"
              value={requesterEmail}
              onChange={(e) => setRequesterEmail(e.target.value)}
            />
            {/* Display tag iteams */}
            {/* Add delete button and cal handle delete tag function send name */}
            <Box>
              {messages.length > 0 && <h3>Add Messages</h3>}
              {messages.map((mess, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Typography variant="subtitle2">{mess.from}</Typography>
                  <Typography variant="subtitle2">{mess.body}</Typography>
                  <Typography variant="subtitle2">{mess.createdAt}</Typography>
                  <Button onClick={() => handleDeleteMessages(mess)}>
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
            <TextField
              label="from"
              type="text"
              value={messageObject.from}
              onChange={(e) =>
                setMessageObject({
                  ...messageObject,
                  from: e.target.value,
                })
              }
            />
            <TextField
              label="body"
              type="text"
              value={messageObject.body}
              onChange={(e) =>
                setMessageObject({
                  ...messageObject,
                  body: e.target.value,
                })
              }
            />
            <TextField
              label="createdAt"
              type="date"
              value={messageObject.createdAt}
              onChange={(e) =>
                setMessageObject({
                  ...messageObject,
                  createdAt: e.target.value,
                })
              }
            />
            <Button
              variant="contained"
              onClick={handleAddMessages}
              sx={{ mb: 2 }}
            >
              Add Messages
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              {id === null ? "Submit" : "Update"}
            </Button>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default TicketsModal;
