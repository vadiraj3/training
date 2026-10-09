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
import {
  useCreateTodosMutation,
  useUpdateTodosMutation,
} from "../store/api/todosApi";

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
  propTitle = "",
  propDueDate = "",
  propPriority = "",
  propStatus = "",
  propSubTasks = [],
}) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [subTaskObject, setSubTaskObject] = useState({ title: "", done: true });

  useEffect(() => {
    if (id !== null) {
      setTitle(propTitle);
      setDueDate(propDueDate);
      setPriority(propPriority);
      setStatus(propStatus);
      setSubTasks(propSubTasks);
    }
  }, [id]);

  const [createTodos] = useCreateTodosMutation();
  const [updateTodos] = useUpdateTodosMutation();

  const handleClose = () => setOpen(false);

  const handleTodosItems = () => {
    if (subTaskObject.title.trim() === "") {
      alert("please enter title here");
      return;
    }
    setSubTasks([
      ...subTasks,
      {
        title: subTaskObject.title,
        done: subTaskObject.done,
      },
    ]);
    setSubTaskObject({ title: "", done: true });
  };

  const handleDeleteTodos = (deleteTodo) => {
    const newTodos = subTasks.filter((task) => task !== deleteTodo);
    setSubTasks(newTodos);
  };

  const handleSubmit = async () => {
    if (title.trim() === "") {
      alert("please enter title here");
      return;
    }
    if (!dueDate) {
      alert("please enter date here");
      return;
    }
    if (priority.trim() === "") {
      alert("please enter priority here");
      return;
    }
    if (status.trim() === "") {
      alert("please enter status here");
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
        alert("Data Submitted Successefully");
      } else {
        console.log(id);
        const response = await updateTodos({ id: id, payload: payload });
        alert("Updated");
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
            {id === null ? "Create" : "Update"} Product
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="duedate"
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
              {subTasks.length > 0 && <h3>Add SubTasks</h3>}

              {subTasks.map((task, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Typography variant="subtitle2">{task.title}</Typography>
                  <Typography variant="subtitle2">
                    Done{task.done ? "" : ""}
                  </Typography>
                  <Button onClick={() => handleDeleteTodos(task)}>
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
            <TextField
              label="title"
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
                    done: false,
                  })
                }
              />
              DONE
            </Box>

            <Button
              variant="contained"
              onClick={handleTodosItems}
              sx={{ mb: 2 }}
            >
              Add Todos
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

export default TodosModal;
