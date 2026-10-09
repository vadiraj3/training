import { useState } from 'react';
import {
  Alert,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import products from '../data/products.json';

function CatalogPage() {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const [stock, setStock] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  /**
   * TODO: Build visibleProducts from `products`.
   * 1. Search name (case-insensitive) using searchText
   * 2. Filter category when it is not "all"
   * 3. Filter stock: "in" => inStock true, "out" => inStock false
   * 4. Sort by sortBy: name | price-asc | price-desc | rating | newest
   * Do not mutate the original array. Copy it before sort.
   */
  const visibleProducts = products;

  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        Product Catalog
      </Typography>
      <Alert severity="info">
        Data comes from <code>src/data/products.json</code>. The controls are on screen,
        but search, filter, and sort are not wired yet. The list currently shows every product.
      </Alert>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <TextField
          label="Search by name"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value="all">All categories</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="books">Books</MenuItem>
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="kitchen">Kitchen</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="stock-label">Stock</InputLabel>
          <Select
            labelId="stock-label"
            label="Stock"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="in">In stock</MenuItem>
            <MenuItem value="out">Out of stock</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="sort-label">Sort</InputLabel>
          <Select
            labelId="sort-label"
            label="Sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="price-asc">Price: low to high</MenuItem>
            <MenuItem value="price-desc">Price: high to low</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="newest">Newest first</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        Showing {visibleProducts.length} of {products.length}
      </Typography>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Added</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>₹{product.price}</TableCell>
                <TableCell>{product.rating}</TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={product.inStock ? 'In stock' : 'Out of stock'}
                    color={product.inStock ? 'success' : 'default'}
                  />
                </TableCell>
                <TableCell>{product.addedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {visibleProducts.length === 0 && (
        <Alert severity="warning">No products match the current search and filters.</Alert>
      )}
    </Stack>
  );
}

export default CatalogPage;
