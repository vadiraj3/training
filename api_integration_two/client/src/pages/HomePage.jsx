import {
  Alert,
  Button,
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
    tip: 'Use Chip for tags and TextField for creating products.',
  },
  {
    title: 'Todos',
    path: '/todos',
    arrayField: 'subTasks',
    tip: 'Use Checkbox + List for subTasks and Accordion for each todo.',
  },
  {
    title: 'Projects',
    path: '/projects',
    arrayField: 'milestones',
    tip: 'Use Stepper or Accordion for milestones progress.',
  },
  {
    title: 'Orders',
    path: '/orders',
    arrayField: 'items',
    tip: 'Use Table for line items and Chip for order status.',
  },
  {
    title: 'Support Tickets',
    path: '/tickets',
    arrayField: 'messages',
    tip: 'Use Dialog for ticket detail and List for message thread.',
  },
];

function HomePage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        CRUD Practice Modules
      </Typography>
      <Alert severity="info">
        Integration code is intentionally missing. Use <code>src/services</code> helpers
        (start from <code>productsApi.js</code>) and wire GET / POST / PUT / DELETE yourself.
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
