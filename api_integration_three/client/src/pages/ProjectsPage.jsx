import React, { useState } from "react";
import { useGetProjectsQuery } from "../store/api/projectsApi";
import { Button, Grid } from "@mui/material";
import ProjectsCard from "../components/ProjectsCard";
import ProjectsModal from "../components/ProjectsModal";

const ProjectsPage = () => {
  const { data, isLoading, isError } = useGetProjectsQuery();

  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add projects
      </Button>
      <Grid container spacing={2}>
        {data.map((project) => (
          <ProjectsCard
            key={project.id}
            id={project.id}
            name={project.name}
            owner={project.owner}
            budget={project.budget}
            status={project.status}
            milestones={project.milestones}
          />
        ))}
      </Grid>

      {open && <ProjectsModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default ProjectsPage;
