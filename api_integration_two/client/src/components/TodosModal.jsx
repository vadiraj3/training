import {
  Box,
  Button,
  Card,
  Checkbox,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTodos, getTodosById, updateTodos } from "../services/todosApi";

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
  height: "90vh",
};
const TodosModal = ({
  id = null,
  open,
  setOpen,
  propTitle,
  propDueDate,
  PropPriority,
  propStatus,
  propSubTasks,
}) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [subTaskObject, setSubTaskObject] = useState({ title: "", done: true });
  const handleClose = () => setOpen(false);

  const handelSubTasks = () => {
    if (subTaskObject.title === "") {
      alert("Please enter subtitle here");
      return;
    }
    setSubTasks([
      ...subTasks,
      {
        title: subTaskObject.title,
        done: subTaskObject.done,
      },
    ]);
    setSubTaskObject({ title: "", done: "" });
  };

  const handleDeleteTasks = (ClickedTasks) => {
    const newTasks = subTasks.filter((task) => task !== ClickedTasks);

    setSubTasks(newTasks);
  };

  useEffect(() => {
    console.log(id !== null);
    if (id !== null) {
      setTitle(propTitle);
      setDueDate(propDueDate);
      setPriority(PropPriority);
      setStatus(propStatus);
      setSubTasks(propSubTasks);
    }
  }, [id]);

  const handelSubmit = async () => {
    if (title.trim() === "") {
      alert("Please enter title here");
      return;
    }
    if (!dueDate) {
      alert("Please enter dueDate here");
      return;
    }
    if (priority.trim() === "") {
      alert("Please enter priority here");
      return;
    }
    if (status.trim() === "") {
      alert("Please enter status here");
      return;
    }
    if (subTaskObject.title.trim() === "") {
      alert("please enter subtitle here");
      return;
    }

    const payload = {
      title: title,
      dueDate: dueDate,
      priority: priority,
      status: status,
      subTasks: subTasks,
    };

    try {
      if (id === null) {
        const response = await createTodos(payload);
        alert("Submitted Data Successfully");
      } else {
        const response = await updateTodos(id, payload);
        alert("Updated");
        location.reload();
      }

      handleClose();
    } catch (error) {
      console.error(
        "Error data Submitted",
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
            {id === null ? "Create" : "Update"} Todos
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
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

            {/* Display tag iteams */}
            {/* Add delete button and cal handle delete tag function send name */}
            <Box>
              {subTasks.length > 0 && <h3>Add Tasks</h3>}
              {subTasks.map((task, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Typography variant="subtitle2">{task.title}</Typography>
                  <Typography variant="subtitle2">
                    Done{task.done ? "" : ""}
                  </Typography>
                  <Button onClick={() => handleDeleteTasks(task)}>
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
            <h3>SubTasks</h3>
            <TextField
              label="Title"
              type="text"
              value={subTaskObject.title}
              onChange={(e) =>
                setSubTaskObject({ ...subTaskObject, title: e.target.value })
              }
            />
            <Box>
              <Checkbox
                value={subTaskObject.done}
                checked={subTaskObject.done}
                onChange={(e) =>
                  setSubTaskObject({
                    ...subTaskObject,
                    done: e.target.checked,
                  })
                }
              />
              DONE
            </Box>
            <Button variant="contained" onClick={handelSubTasks} sx={{ mb: 2 }}>
              AddSubTasks
            </Button>
            <Button variant="contained" onClick={handelSubmit}>
              {id === null ? "Submit" : "Update"}
            </Button>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default TodosModal;
