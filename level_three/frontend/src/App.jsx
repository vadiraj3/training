import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	Container,
} from '@mui/material';
import TasksPage from './pages/TasksPage';
import StarterViewsPage from './pages/StarterViewsPage';
import './App.css';

function Navigation() {
	const location = useLocation();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					API Integration Training - Level 3
				</Typography>
				<Button
					color="inherit"
					component={Link}
					to="/tasks"
					sx={{
						backgroundColor:
							location.pathname === '/tasks'
								? 'rgba(255, 255, 255, 0.1)'
								: 'transparent',
					}}
				>
					Tasks
				</Button>
				<Button
					color="inherit"
					component={Link}
					to="/starter-views"
					sx={{
						backgroundColor:
							location.pathname === '/starter-views'
								? 'rgba(255, 255, 255, 0.1)'
								: 'transparent',
						ml: 1,
					}}
				>
					Starter Views
				</Button>
			</Toolbar>
		</AppBar>
	);
}

function HomePage() {
	return (
		<Container maxWidth="xl" sx={{ py: 4, textAlign: 'center' }}>
			<Typography variant="h3" component="h1" gutterBottom color="black">
				Welcome to API Integration Training - Level 3
			</Typography>
			<Typography variant="h6" color="text.secondary" paragraph>
				Learn how to integrate APIs with React, Axios, and Material-UI while
				handling complex objects and unusual response shapes
			</Typography>
			<Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
				<Button variant="contained" size="large" component={Link} to="/tasks">
					View All Tasks
				</Button>
				<Button variant="outlined" size="large" component={Link} to="/starter-views">
					View Starter Views
				</Button>
			</Box>
		</Container>
	);
}

function App() {
	return (
		<Router>
			<Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
				<Navigation />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/tasks" element={<TasksPage />} />
					<Route path="/starter-views" element={<StarterViewsPage />} />
				</Routes>
			</Box>
		</Router>
	);
}

export default App;
