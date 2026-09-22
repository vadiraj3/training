import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/todos', label: 'Todos' },
  { to: '/projects', label: 'Projects' },
  { to: '/orders', label: 'Orders' },
  { to: '/tickets', label: 'Tickets' },
];

function AppLayout({ children }) {
  const location = useLocation();

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ gap: 1, flexWrap: 'wrap' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            API Integration Two
          </Typography>
          {links.map((link) => (
            <Button
              key={link.to}
              component={RouterLink}
              to={link.to}
              color="inherit"
              variant={location.pathname === link.to ? 'outlined' : 'text'}
            >
              {link.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}

export default AppLayout;
