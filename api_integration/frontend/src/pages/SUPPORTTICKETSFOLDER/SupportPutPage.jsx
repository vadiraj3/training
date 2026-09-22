import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

const SupportPutPage = () => {
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("");
  const [requester, setRequester] = useState({ name: "", email: "" });
  const [messages, setMessages] = useState([]);
  const [messageObject, setMessageObject] = useState({
    from: "",
    body: "",
    createdAt: "",
  });
  const navigate = useNavigate();

  const handelMessages = (e) => {
    e.stopPropagation();
    setMessages([
      ...messages,
      {
        from: messageObject.from,
        body: messageObject.body,
        createdAt: messageObject.createdAt,
      },
    ]);
  };

  const params = useParams();

  useEffect(() => {
    const fatch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/records/supportTickets/${params.id}`,
        );
        const { subject, priority, requester, messages } = response.data;
        setSubject(subject);
        setPriority(priority);
        setRequester(requester);
        setMessages(messages);
        console.log(messages);
      } catch (error) {
        console.log(error);
      }
    };
    fatch();
  }, []);

  const handelSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/support-tickets/${params.id}`,
        {
          subject: subject,
          priority: priority,
          requester: requester,
          messages: messages,
        },
      );
      navigate("/support-get-page");
      console.log("Data submitted successfully:", response.data.message);
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response?.data || error.message,
      );
    }
  };

  const handleEditMessage = (messageObject) => {
    setMessageObject({
      from: messageObject.from,
      body: messageObject.body,
      createdAt: messageObject.createdAt,
    });
  };

  const handleDeleteMessage = (body) => {
    const newMessages = messages.filter((message) => {
      return message.body !== body;
    });
    setMessages(newMessages);
  };

  return (
    <div>
      <label>Subject: </label>
      <input
        type="text"
        name="sub"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <br />
      <label>priority: </label>
      <input
        type="text"
        name="pri"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <br />
      <br />
      <h1>Requester</h1>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={requester.name}
        onChange={(e) => setRequester({ ...requester, name: e.target.value })}
      />
      <br />
      <br />
      <label>Email: </label>
      <input
        type="text"
        name="email"
        value={requester.email}
        onChange={(e) => setRequester({ ...requester, email: e.target.value })}
      />
      <br />
      <br />
      <div style={{ display: "flex", gap: 50, justifyContent: "center" }}>
        <div>
          <h1>Messages: </h1>
          <label>From : </label>
          <input
            type="text"
            name="from"
            value={messageObject.from}
            onChange={(e) =>
              setMessageObject({ ...messageObject, from: e.target.value })
            }
          />
          <br />
          <br />
          <label>Body: </label>
          <input
            type="text"
            name="body"
            value={messageObject.body}
            onChange={(e) =>
              setMessageObject({ ...messageObject, body: e.target.value })
            }
          />
          <br />
          <br />
          <label>createdAt: </label>
          <input
            type="date"
            name="creat"
            value={messageObject.createdAt}
            onChange={(e) =>
              setMessageObject({ ...messageObject, createdAt: e.target.value })
            }
          />
        </div>

        <button
          onClick={handelMessages}
          style={{ height: "30px", marginTop: "30px" }}
        >
          Add Messages
        </button>
      </div>

      <div>
        {messages.length > 0 && <h3>Messages added:</h3>}
        {messages.map((message, index) => (
          <Box key={index}>
            {message.from}
            {message.body}
            {message.createdAt}
            <CreateIcon onClick={() => handleEditMessage(message)} />

            <DeleteIcon onClick={() => handleDeleteMessage(message.body)} />
          </Box>
        ))}
      </div>
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default SupportPutPage;
