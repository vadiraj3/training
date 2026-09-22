import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import { createProject, deleteProject, getProjects } from '../services';

const emptyForm = {
  name: '',
  owner: '',
  budget: '',
  milestonesText: '',
};

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProjects = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getProjects();
      setProjects(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();
    setError('');

    const payload = {
      name: form.name,
      owner: form.owner,
      budget: Number(form.budget),
      status: 'active',
      milestones: form.milestonesText
        .split(',')
        .map((title) => title.trim())
        .filter(Boolean)
        .map((title, index) => ({
          title,
          status: index === 0 ? 'in-progress' : 'planned',
        })),
    };

    try {
      await createProject(payload);
      setForm(emptyForm);
      await loadProjects();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Projects CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>milestones</strong>. Use Stepper for visual progress.
      </Alert>
      {error && <Alert severity="error">{error}</Alert>}

      <Card component="form" onSubmit={handleCreate}>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="Project name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
            <TextField
              label="Owner"
              value={form.owner}
              onChange={(e) => setForm((prev) => ({ ...prev, owner: e.target.value }))}
              required
            />
            <TextField
              label="Budget"
              type="number"
              value={form.budget}
              onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
            />
            <TextField
              label="Milestones (comma separated)"
              helperText="Example: Discovery, Build, Launch"
              value={form.milestonesText}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, milestonesText: e.target.value }))
              }
              required
            />
            <Button type="submit" variant="contained">
              Create Project
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {loading ? (
        <CircularProgress />
      ) : (
        projects.map((project) => (
          <Card key={project.id} variant="outlined">
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {project.name}
                </Typography>
                <Chip label={project.status || 'active'} size="small" />
              </Stack>
              <Typography color="text.secondary" gutterBottom>
                Owner: {project.owner} · Budget: {project.budget}
              </Typography>
              <Stepper alternativeLabel sx={{ mb: 2 }}>
                {(project.milestones || []).map((milestone) => (
                  <Step
                    key={milestone.title}
                    completed={milestone.status === 'done'}
                    active={milestone.status === 'in-progress'}
                  >
                    <StepLabel>{milestone.title}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Button color="error" onClick={() => deleteProject(project.id).then(loadProjects)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </Stack>
  );
}

export default ProjectsPage;
