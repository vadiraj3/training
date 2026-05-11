import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export function MessageCard({ message }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Chip label="String response" size="small" color="primary" />
          <Typography variant="h6">Message payload</Typography>
          <Typography variant="body1">{message || 'No message returned.'}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function CountCard({ count, label = 'Count' }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Chip label="Number response" size="small" color="secondary" />
          <Typography variant="overline" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h2" component="div">
            {Number.isFinite(count) ? count : '0'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Use this pattern for KPIs, totals, or usage counts.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function FlagCard({ value, label = 'Feature enabled' }) {
  const isActive = Boolean(value);

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1.5}>
          <Chip
            label="Boolean response"
            size="small"
            color={isActive ? 'success' : 'default'}
          />
          <Typography variant="h6">{label}</Typography>
          <Alert severity={isActive ? 'success' : 'warning'}>
            {isActive ? 'Active' : 'Inactive'} state received from the API.
          </Alert>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function EmptyCard({ title = 'No data available' }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Chip label="Null response" size="small" />
          <Typography variant="h6">{title}</Typography>
          <Alert severity="info">
            The API returned `null`, so this is the empty-state fallback.
          </Alert>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function MatrixCard({ rows }) {
  const [headerRow, ...bodyRows] = rows || [];

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Chip label="Matrix response" size="small" color="info" />
          <Typography variant="h6">Table-ready data</Typography>
          <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {(headerRow || []).map((cell) => (
                    <TableCell key={cell} sx={{ fontWeight: 700 }}>
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {bodyRows.map((row, rowIndex) => (
                  <TableRow key={`${rowIndex}-${row?.[0] ?? 'row'}`}>
                    {(row || []).map((cell, cellIndex) => (
                      <TableCell key={`${rowIndex}-${cellIndex}`}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function ResponseStarterSection({ title, description, children }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
          <Divider />
          {children}
        </Stack>
      </CardContent>
    </Card>
  );
}
