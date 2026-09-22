import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

/**
 * UI shell only.
 * TODO: wire createProduct / getProducts / updateProduct / deleteProduct from services.
 */
function ProductsPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Products CRUD</Typography>
      <Alert severity="info">
        Required array field: <strong>tags</strong>. Service helpers already exist in{' '}
        <code>services/productsApi.js</code> — connect them here.
      </Alert>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Create Product
          </Typography>
          <Stack spacing={2}>
            <TextField label="Name" />
            <TextField label="Price" type="number" />
            <TextField label="Category" />
            <TextField
              label="Tags (comma separated)"
              helperText="Example: office, wireless, accessory"
            />
            <Button variant="contained">Create Product</Button>
          </Stack>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">Sample product card (UI only)</Typography>
          <Typography color="text.secondary">₹2499 · electronics</Typography>
          <Stack direction="row" spacing={1} mt={1}>
            <Chip label="office" size="small" />
            <Chip label="wireless" size="small" />
          </Stack>
          <Button color="error" sx={{ mt: 1 }}>
            Delete
          </Button>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default ProductsPage;
