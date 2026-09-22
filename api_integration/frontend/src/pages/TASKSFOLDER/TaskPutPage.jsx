import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TasksPutPage = () => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [tasksPut, setTasksPut] = useState({});
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    const fatch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/records/tasks/${params.id}`,
        );
        setTasksPut(response.id);
        console.log(response);
        const { title, dueDate, priority } = response.data;

        setTitle(title);
        setDueDate(dueDate);
        setPriority(priority);
      } catch (error) {
        console.log(error);
      }
    };
    fatch();
  }, []);

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
      const response = await axios.put(
        `http://localhost:3000/api/tasks/${params.id}`,
        {
          title: title,
          dueDate: dueDate,
          priority: priority,
        },
      );
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

export default TasksPutPage;
