import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
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

/**
 * UI shell only.
 * TODO: implement ticketsApi.js, then wire GET / POST / PUT / DELETE here.
 */
function TicketsPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Support Tickets CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>messages</strong>. Use Dialog for detail threads.
      </Alert>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Subject" />
            <TextField label="Priority" defaultValue="medium" />
            <TextField label="Requester name" />
            <TextField label="Requester email" />
            <TextField label="First message" multiline minRows={3} />
            <Button variant="contained">Create Ticket</Button>
          </Stack>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Sample ticket (UI only)
            </Typography>
            <Chip label="high" color="error" size="small" />
            <Chip label="open" size="small" />
          </Stack>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            Sara Khan · sara@example.com
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined">View messages</Button>
            <Button color="error">Delete</Button>
          </Stack>
        </CardContent>
      </Card>

      <Dialog open={false}>
        <DialogTitle>Sample ticket thread</DialogTitle>
        <DialogContent>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="customer"
                secondary="The app showed an error after payment."
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button>Close</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

export default TicketsPage;
