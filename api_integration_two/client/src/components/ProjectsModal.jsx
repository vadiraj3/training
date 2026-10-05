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
import { createProjects, updateProjects } from "../services/projectsApi";

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

const ProjectsModal = ({
  id = null,
  open,
  setOpen,
  propName,
  propOwner,
  propBudget,
  propStatus,
  propMilestones,
}) => {
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("");
  const [milestones, setMilestones] = useState([]);
  const [milestoneObject, setMilestoneObject] = useState({
    title: "",
    status: "",
  });
  console.log(propMilestones);

  useEffect(() => {
    if (id !== null) {
      (setName(propName),
        setOwner(propOwner),
        setBudget(propBudget),
        setStatus(propStatus),
        setMilestones(propMilestones));
    }
  }, [id]);

  const handelAddMilestones = () => {
    if (milestoneObject.title.trim() === "") {
      alert("please enter title here");
      return;
    }
    if (milestoneObject.status.trim() === "") {
      alert("please enter status here");
      return;
    }
    setMilestones([
      ...milestones,
      {
        title: milestoneObject.title,
        status: milestoneObject.status,
      },
    ]);
    setMilestoneObject({
      title: "",
      status: "",
    });
  };

  const handleDeleteMilestones = (deleteMile) => {
    const newMilestones = milestones.filter((mile) => mile !== deleteMile);
    setMilestones(newMilestones);
  };

  const handleSubmit = async () => {
    if (name.trim() === "") {
      alert("please enter name here");
      return;
    }
    if (owner.trim() === "") {
      alert("please enter owner here");
      return;
    }
    if (!budget) {
      alert("please enter budget here");
      return;
    }
    if (status.trim() === "") {
      alert("please enter status here");
      return;
    }

    const payload = {
      name: name,
      owner: owner,
      budget: budget,
      status: status,
      milestones: milestones,
    };

    try {
      if (id === null) {
        const response = await createProjects(payload);
        alert("Data submitted Successfully");
      } else {
        const response = await updateProjects(id, payload);
        console.log("Updated");
      }
      handleClose();
    } catch (error) {
      (console.error("Error Data Submitted"),
        error.response?.data || error.message);
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
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="owner"
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />

            <TextField
              label="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
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
              {/* {milestones.length > 0 && <h3>Add Milestones</h3>} */}
              {milestones.map((mile, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Typography variant="subtitle2">{mile.title}</Typography>
                  <Typography variant="subtitle2">{mile.status}</Typography>
                  <Button onClick={() => handleDeleteMilestones(mile)}>
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
            <TextField
              label="title"
              type="text"
              value={milestoneObject.title}
              onChange={(e) =>
                setMilestoneObject({
                  ...milestoneObject,
                  title: e.target.value,
                })
              }
            />
            <TextField
              label="status"
              type="text"
              value={milestoneObject.status}
              onChange={(e) =>
                setMilestoneObject({
                  ...milestoneObject,
                  status: e.target.value,
                })
              }
            />
            <Button
              variant="contained"
              onClick={handelAddMilestones}
              sx={{ mb: 2 }}
            >
              Add Milestones
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

export default ProjectsModal;
