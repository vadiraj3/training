import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
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
import { createOrder, deleteOrder, getOrders } from '../services';

const emptyForm = {
  customerName: '',
  customerEmail: '',
  shippingCity: '',
  itemsText: '',
};

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadOrders = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();
    setError('');

    // itemsText format: sku|name|qty|price ; sku|name|qty|price
    const items = form.itemsText
      .split(';')
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((chunk) => {
        const [sku, name, quantity, price] = chunk.split('|').map((part) => part.trim());
        return {
          sku,
          name,
          quantity: Number(quantity),
          price: Number(price),
        };
      });

    const payload = {
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      shippingCity: form.shippingCity,
      status: 'pending',
      items,
    };

    try {
      await createOrder(payload);
      setForm(emptyForm);
      await loadOrders();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Orders CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>items</strong>. Use Table for line items.
      </Alert>
      {error && <Alert severity="error">{error}</Alert>}

      <Card component="form" onSubmit={handleCreate}>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="Customer name"
              value={form.customerName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, customerName: e.target.value }))
              }
              required
            />
            <TextField
              label="Customer email"
              value={form.customerEmail}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, customerEmail: e.target.value }))
              }
            />
            <TextField
              label="Shipping city"
              value={form.shippingCity}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, shippingCity: e.target.value }))
              }
            />
            <TextField
              label="Items"
              helperText="Format: sku|name|qty|price ; sku|name|qty|price"
              value={form.itemsText}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, itemsText: e.target.value }))
              }
              required
              multiline
              minRows={2}
            />
            <Button type="submit" variant="contained">
              Create Order
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {loading ? (
        <CircularProgress />
      ) : (
        orders.map((order) => (
          <Paper key={order.id} sx={{ p: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {order.customerName}
              </Typography>
              <Chip label={order.status || 'pending'} color="warning" size="small" />
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
                {(order.items || []).map((item, index) => (
                  <TableRow key={`${order.id}-${index}`}>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              sx={{ mt: 1 }}
              color="error"
              onClick={() => deleteOrder(order.id).then(loadOrders)}
            >
              Delete
            </Button>
          </Paper>
        ))
      )}
    </Stack>
  );
}

export default OrdersPage;
