import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { createProduct, deleteProduct, getProducts } from '../services';

const emptyForm = {
  name: '',
  price: '',
  category: '',
  inStock: true,
  tagsText: '',
};

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const loadProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const payload = {
      name: form.name,
      price: Number(form.price),
      category: form.category,
      inStock: form.inStock,
      tags: form.tagsText
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    try {
      await createProduct(payload);
      setSuccess('Product created');
      setForm(emptyForm);
      await loadProducts();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    setError('');
    try {
      await deleteProduct(id);
      setSuccess('Product deleted');
      await loadProducts();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Products CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>tags</strong>. Use service helpers from{' '}
        <code>services/productsApi.js</code>.
      </Alert>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <Card component="form" onSubmit={handleCreate}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Create Product
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
            <TextField
              label="Price"
              type="number"
              value={form.price}
              onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
              required
            />
            <TextField
              label="Category"
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
            />
            <TextField
              label="Tags (comma separated)"
              helperText="Example: office, wireless, accessory"
              value={form.tagsText}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, tagsText: e.target.value }))
              }
              required
            />
            <Button type="submit" variant="contained">
              Create Product
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack spacing={1}>
          {products.map((product) => (
            <Card key={product.id} variant="outlined">
              <CardContent>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Box>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography color="text.secondary">
                      ₹{product.price} · {product.category || 'uncategorized'}
                    </Typography>
                    <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
                      {(product.tags || []).map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Stack>
                  </Box>
                  <Button color="error" onClick={() => handleDelete(product.id)}>
                    Delete
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default ProductsPage;
