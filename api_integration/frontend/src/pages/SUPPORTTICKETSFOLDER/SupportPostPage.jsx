import { Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SupportPostPage = () => {
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

  const handelMessages = () => {
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

  const handelSubmit = async () => {
    if (subject === "") {
      alert("Pls enter subject");
      return;
    }
    if (priority === "") {
      alert("Pls enter subject");
      return;
    }
    if (messages.length > 0) {
      alert("Pls add at least one message");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/support-tickets",
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
        {messages.map((message) => (
          <Box key={message.from}>
            {message.from}
            {message.body}
            {message.createdAt}
          </Box>
        ))}
      </div>
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default SupportPostPage;
