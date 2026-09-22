import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTodo, deleteTodo, getTodos } from '../services';

const emptyForm = {
  title: '',
  dueDate: '',
  priority: 'medium',
  subTasksText: '',
};

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadTodos = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();
    setError('');

    const payload = {
      title: form.title,
      dueDate: form.dueDate,
      priority: form.priority,
      status: 'open',
      subTasks: form.subTasksText
        .split(',')
        .map((title) => title.trim())
        .filter(Boolean)
        .map((title) => ({ title, done: false })),
    };

    try {
      await createTodo(payload);
      setForm(emptyForm);
      await loadTodos();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Todos CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>subTasks</strong>. Prefer Accordion + Checkbox list
        instead of plain Typography dumps.
      </Alert>
      {error && <Alert severity="error">{error}</Alert>}

      <Card component="form" onSubmit={handleCreate}>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="Title"
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              required
            />
            <TextField
              label="Due date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={form.dueDate}
              onChange={(e) => setForm((prev) => ({ ...prev, dueDate: e.target.value }))}
              required
            />
            <TextField
              label="Priority"
              value={form.priority}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, priority: e.target.value }))
              }
            />
            <TextField
              label="Sub tasks (comma separated)"
              helperText="Example: Draft API, Build form, Write tests"
              value={form.subTasksText}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, subTasksText: e.target.value }))
              }
              required
            />
            <Button type="submit" variant="contained">
              Create Todo
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {loading ? (
        <CircularProgress />
      ) : (
        todos.map((todo) => (
          <Accordion key={todo.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ flexGrow: 1 }}>{todo.title}</Typography>
              <Typography color="text.secondary">{todo.dueDate}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {(todo.subTasks || []).map((subTask, index) => (
                  <ListItem key={`${todo.id}-${index}`}>
                    <ListItemIcon>
                      <Checkbox edge="start" checked={Boolean(subTask.done)} disabled />
                    </ListItemIcon>
                    <ListItemText primary={subTask.title} />
                  </ListItem>
                ))}
              </List>
              <FormControlLabel
                control={<Checkbox checked={todo.status === 'open'} disabled />}
                label={`Status: ${todo.status || 'open'}`}
              />
              <Button color="error" onClick={() => deleteTodo(todo.id).then(loadTodos)}>
                Delete
              </Button>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Stack>
  );
}

export default TodosPage;
