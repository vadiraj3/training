import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { createTicket, deleteTicket, getTickets } from '../services';

const emptyForm = {
  subject: '',
  priority: 'medium',
  requesterName: '',
  requesterEmail: '',
  firstMessage: '',
};

function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadTickets = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getTickets();
      setTickets(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();
    setError('');

    const payload = {
      subject: form.subject,
      priority: form.priority,
      status: 'open',
      requesterName: form.requesterName,
      requesterEmail: form.requesterEmail,
      messages: [
        {
          from: 'customer',
          body: form.firstMessage,
          createdAt: new Date().toISOString(),
        },
      ],
    };

    try {
      await createTicket(payload);
      setForm(emptyForm);
      await loadTickets();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Support Tickets CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>messages</strong>. Use Dialog for detail threads.
      </Alert>
      {error && <Alert severity="error">{error}</Alert>}

      <Card component="form" onSubmit={handleCreate}>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="Subject"
              value={form.subject}
              onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
              required
            />
            <TextField
              label="Priority"
              value={form.priority}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, priority: e.target.value }))
              }
              required
            />
            <TextField
              label="Requester name"
              value={form.requesterName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, requesterName: e.target.value }))
              }
            />
            <TextField
              label="Requester email"
              value={form.requesterEmail}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, requesterEmail: e.target.value }))
              }
            />
            <TextField
              label="First message"
              value={form.firstMessage}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, firstMessage: e.target.value }))
              }
              required
              multiline
              minRows={3}
            />
            <Button type="submit" variant="contained">
              Create Ticket
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {loading ? (
        <CircularProgress />
      ) : (
        tickets.map((ticket) => (
          <Card key={ticket.id} variant="outlined">
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {ticket.subject}
                </Typography>
                <Chip label={ticket.priority} color="error" size="small" />
                <Chip label={ticket.status || 'open'} size="small" />
              </Stack>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                {ticket.requesterName} · {ticket.requesterEmail}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" onClick={() => setSelected(ticket)}>
                  View messages
                </Button>
                <Button
                  color="error"
                  onClick={() => deleteTicket(ticket.id).then(loadTickets)}
                >
                  Delete
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))
      )}

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} fullWidth>
        <DialogTitle>{selected?.subject}</DialogTitle>
        <DialogContent>
          <List>
            {(selected?.messages || []).map((message, index) => (
              <ListItem key={`${selected?.id}-${index}`} alignItems="flex-start">
                <ListItemText
                  primary={`${message.from} · ${message.createdAt || ''}`}
                  secondary={message.body}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelected(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

export default TicketsPage;
