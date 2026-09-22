import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TasksPostPage = () => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async () => {
    if (title.trim() === "") {
      console.log("Please enter title");
      return;
    }
    if (!dueDate) {
      console.log("Please enter date here");
      return;
    }
    if (priority.trim() === "") {
      console.log("Please enter Priority here");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/tasks", {
        title: title,
        dueDate: dueDate,
        priority: priority,
      });
      navigate("/tasks-get-page");
      console.log("Data submitted Successfully", response.data.massage);
    } catch (error) {
      console.error(
        "Error Data Submitted",
        error.response?.data || error.massage,
      );
    }
  };

  return (
    <div>
      <label>Title :</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <label>DueDate :</label>
      <input
        type="date"
        name="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <br />
      <br />
      <label>Priority :</label>
      <input
        type="text"
        name="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default TasksPostPage;
