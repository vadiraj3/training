import {
  Alert,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const modules = [
  {
    title: 'Products',
    path: '/products',
    arrayField: 'tags',
    tip: 'Example slice is ready in store/api/productsApi.js — wire the hooks in the page.',
  },
  {
    title: 'Todos',
    path: '/todos',
    arrayField: 'subTasks',
    tip: 'Implement todosApi.js with injectEndpoints, then connect the page.',
  },
  {
    title: 'Projects',
    path: '/projects',
    arrayField: 'milestones',
    tip: 'Implement projectsApi.js — use Stepper UI + RTK hooks.',
  },
  {
    title: 'Orders',
    path: '/orders',
    arrayField: 'items',
    tip: 'Implement ordersApi.js — Table UI + RTK hooks.',
  },
  {
    title: 'Support Tickets',
    path: '/tickets',
    arrayField: 'messages',
    tip: 'Implement ticketsApi.js — Dialog UI + RTK hooks.',
  },
];

function HomePage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        RTK Query Practice Modules
      </Typography>
      <Alert severity="info">
        Same APIs as <code>api_integration_two</code>. This time use RTK Query hooks
        instead of Axios service functions. Start from{' '}
        <code>store/api/productsApi.js</code>.
      </Alert>
      <List>
        {modules.map((module) => (
          <ListItem
            key={module.path}
            component={RouterLink}
            to={module.path}
            sx={{ mb: 1, bgcolor: 'background.paper', borderRadius: 1 }}
          >
            <Card sx={{ width: '100%' }} variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <Typography variant="h6">{module.title}</Typography>
                  <Chip label={`array: ${module.arrayField}`} size="small" />
                </Stack>
                <ListItemText primary={module.tip} />
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default HomePage;
