import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Card,
  CardContent,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * UI shell only.
 * TODO: implement todosApi.js, then wire GET / POST / PUT / DELETE here.
 */
function TodosPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Todos CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>subTasks</strong>. Prefer Accordion + Checkbox list.
      </Alert>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Title" />
            <TextField label="Due date" type="date" InputLabelProps={{ shrink: true }} />
            <TextField label="Priority" defaultValue="medium" />
            <TextField
              label="Sub tasks (comma separated)"
              helperText="Example: Draft API, Build form, Write tests"
            />
            <Button variant="contained">Create Todo</Button>
          </Stack>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ flexGrow: 1 }}>Sample todo (UI only)</Typography>
          <Typography color="text.secondary">2026-09-30</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Checkbox edge="start" checked disabled />
              </ListItemIcon>
              <ListItemText primary="Draft endpoints" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Checkbox edge="start" disabled />
              </ListItemIcon>
              <ListItemText primary="Build forms" />
            </ListItem>
          </List>
          <Button color="error">Delete</Button>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default TodosPage;
