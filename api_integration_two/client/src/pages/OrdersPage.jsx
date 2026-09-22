import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

/**
 * UI shell only.
 * TODO: implement ordersApi.js, then wire GET / POST / PUT / DELETE here.
 */
function OrdersPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Orders CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>items</strong>. Use Table for line items.
      </Alert>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Customer name" />
            <TextField label="Customer email" />
            <TextField label="Shipping city" />
            <TextField
              label="Items"
              helperText="Format: sku|name|qty|price ; sku|name|qty|price"
              multiline
              minRows={2}
            />
            <Button variant="contained">Create Order</Button>
          </Stack>
        </CardContent>
      </Card>

      <Paper sx={{ p: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sample order (UI only)
          </Typography>
          <Chip label="pending" color="warning" size="small" />
        </Stack>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>KEY-101</TableCell>
              <TableCell>Wireless Keyboard</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2499</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button sx={{ mt: 1 }} color="error">
          Delete
        </Button>
      </Paper>
    </Stack>
  );
}

export default OrdersPage;
