import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';

/**
 * UI shell only.
 * TODO: implement projectsApi.js, then wire GET / POST / PUT / DELETE here.
 */
function ProjectsPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Projects CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>milestones</strong>. Use Stepper for visual progress.
      </Alert>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Project name" />
            <TextField label="Owner" />
            <TextField label="Budget" type="number" />
            <TextField
              label="Milestones (comma separated)"
              helperText="Example: Discovery, Build, Launch"
            />
            <Button variant="contained">Create Project</Button>
          </Stack>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center" mb={1}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Sample project (UI only)
            </Typography>
            <Chip label="active" size="small" />
          </Stack>
          <Stepper alternativeLabel sx={{ mb: 2 }}>
            <Step completed>
              <StepLabel>Discovery</StepLabel>
            </Step>
            <Step active>
              <StepLabel>Build</StepLabel>
            </Step>
            <Step>
              <StepLabel>Launch</StepLabel>
            </Step>
          </Stepper>
          <Button color="error">Delete</Button>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default ProjectsPage;
