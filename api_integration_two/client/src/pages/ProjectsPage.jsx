import React, { useEffect, useState } from "react";
import { getProjects } from "../services/projectsApi";
import { Button, Grid } from "@mui/material";
import ProjectsCard from "../components/ProjectsCard";
import ProjectsModal from "../components/ProjectsModal";

const ProjectsPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fatch = async () => {
      try {
        const apiData = await getProjects();
        console.log(apiData);
        setData(apiData.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wronge...</div>;
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Projects
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
