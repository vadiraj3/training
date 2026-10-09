import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { useDeleteProjectsMutation } from "../store/api/projectsApi";
import ProjectsModal from "./ProjectsModal";

const ProjectsCard = ({ id, name, owner, budget, status, milestones }) => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const [projectDelete] = useDeleteProjectsMutation();

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      await projectDelete(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <Box p={2}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2">{owner}</Typography>
          <Typography variant="subtitle2">{budget}</Typography>
          <Typography variant="subtitle2">{status}</Typography>
          {milestones.map((mile, index) => (
            <Box key={index}>
              <Typography variant="subtitle2">{mile.title}</Typography>
              <Typography variant="subtitle2">
                status {mile.status ? "" : ""}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={() => setProjectModalOpen(true)}>
            Edit
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Card>

      {projectModalOpen && (
        <ProjectsModal
          open={projectModalOpen}
          setOpen={setProjectModalOpen}
          id={id}
          propName={name}
          propOwner={owner}
          propBudget={budget}
          propStatus={status}
          propMilestones={milestones}
        />
      )}
    </Grid>
  );
};

export default ProjectsCard;
