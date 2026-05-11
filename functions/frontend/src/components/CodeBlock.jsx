import { Paper, Typography, Box } from '@mui/material';

const CodeBlock = ({ code, label }) => {
  return (
    <Box sx={{ mb: 2 }}>
      {label && (
        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: 'block' }}>
          {label}
        </Typography>
      )}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: '#1e1e1e',
          color: '#d4d4d4',
          fontFamily: "'Fira Code', 'Courier New', monospace",
          fontSize: '0.9rem',
          overflow: 'auto',
          borderRadius: 1,
          border: '1px solid #333'
        }}
      >
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          {code}
        </pre>
      </Paper>
    </Box>
  );
};

export default CodeBlock;
