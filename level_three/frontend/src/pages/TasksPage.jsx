import { useState } from 'react';
import {
	Container,
	Typography,
	Card,
	CardContent,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Chip,
	Box,
	List,
	ListItem,
	ListItemText,
	Divider,
	Alert,
	Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tasks } from '../data/tasks';

function TasksPage() {
	const [expandedTask, setExpandedTask] = useState(null);

	const handleChange = (taskId) => (event, isExpanded) => {
		setExpandedTask(isExpanded ? taskId : null);
	};

	const getDifficultyColor = (difficulty) => {
		switch (difficulty) {
			case 'Beginner':
				return 'success';
			case 'Beginner-Intermediate':
			case 'Intermediate':
				return 'warning';
			case 'Intermediate-Advanced':
			case 'Advanced-Intermediate':
			case 'Advanced':
				return 'error';
			case 'Expert':
				return 'error';
			default:
				return 'default';
		}
	};

	return (
		<Container sx={{ py: 4 }}>
			<Typography
				variant="h3"
				component="h1"
				gutterBottom
				sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}
			>
				API Integration Training Tasks
			</Typography>

			<Alert severity="info" sx={{ mb: 4 }}>
				<Typography variant="body1" component="div">
					<strong>Welcome to API Integration Training!</strong>
					<br />
					This page contains 10 progressive tasks to help you master API
					integration with React and Axios.
					<br />
					The first five tasks focus on complex nested objects, then the last
					five introduce alternate response shapes like strings, numbers,
					boolean flags, nulls, and matrix-style arrays.
					<br />
					<strong>Instructions:</strong> Click on each task to see detailed
					requirements, MUI components to use, and hints. For Tasks 6 to 10,
					you can also open <code>/starter-views</code> to see sample UI
					patterns.
					<br />
					<strong>API Base URL:</strong> http://localhost:3000/api
					<br />
					<strong>Swagger Documentation:</strong> http://localhost:3000/api-docs
				</Typography>
			</Alert>

			<Box sx={{ mb: 3 }}>
				<Typography variant="h6" gutterBottom>
					Quick Setup Guide
				</Typography>
				<Paper elevation={1} sx={{ p: 2, mb: 2 }}>
					<Typography variant="body2" component="div">
						<strong>1. Axios Setup:</strong> The API service is already set up
						in <code>src/services/api.js</code>
						<br />
						<strong>2. Import the function:</strong> Import the API function for
						each task (e.g.,{' '}
						<code>
							import {'{'} getProfileInsights {'}'} from '../services/api'
						</code>
						)
						<br />
						<strong>3. Create Components:</strong> Create components as needed
						(e.g., UserCard component for displaying user data)
						<br />
						<strong>4. Use useEffect:</strong> Fetch data when component mounts
						using useEffect hook
						<br />
						<strong>5. Handle States:</strong> Manage loading, error, and data
						states with useState
						<br />
						<strong>6. Display Data:</strong> Use MUI components to display the
						fetched data
					</Typography>
				</Paper>
			</Box>

			{tasks.map((task) => (
				<Accordion
					key={task.id}
					expanded={expandedTask === task.id}
					onChange={handleChange(task.id)}
					sx={{ mb: 2 }}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`task-${task.id}-content`}
						id={`task-${task.id}-header`}
					>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								gap: 2,
							}}
						>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								{task.title}
							</Typography>
							<Chip
								label={task.difficulty}
								color={getDifficultyColor(task.difficulty)}
								size="small"
							/>
							<Chip label={`Task ${task.id}`} variant="outlined" size="small" />
						</Box>
					</AccordionSummary>
					<AccordionDetails>
						<Card variant="outlined">
							<CardContent>
								<Typography variant="h6" gutterBottom color="primary">
									Description
								</Typography>
								<Typography variant="body1" paragraph>
									{task.description}
								</Typography>

								<Divider sx={{ my: 2 }} />

								<Typography variant="h6" gutterBottom color="primary">
									Objective
								</Typography>
								<Typography variant="body1" paragraph>
									{task.objective}
								</Typography>

								<Divider sx={{ my: 2 }} />

								<Typography variant="h6" gutterBottom color="primary">
									API Endpoint
								</Typography>
								<Paper elevation={0} sx={{ p: 1, bgcolor: 'grey.100', mb: 2 }}>
									<Typography variant="body2" component="code">
										GET {task.endpoint}
									</Typography>
									<br />
									<Typography
										variant="body2"
										component="code"
										color="text.secondary"
									>
										Function: {task.apiFunction}()
									</Typography>
								</Paper>

								<Divider sx={{ my: 2 }} />

								<Typography variant="h6" gutterBottom color="primary">
									Data Structure
								</Typography>
								<Typography variant="body2" color="text.secondary" paragraph>
									Type: {task.dataStructure.type}
								</Typography>
								<Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.50', mb: 2 }}>
									<Typography
										variant="body2"
										component="pre"
										sx={{
											fontFamily: 'monospace',
											fontSize: '0.85rem',
											overflow: 'auto',
										}}
									>
										{JSON.stringify(task.dataStructure.example, null, 2)}
									</Typography>
								</Paper>

								<Divider sx={{ my: 2 }} />

								<Typography variant="h6" gutterBottom color="primary">
									Requirements
								</Typography>
								<List dense>
									{task.requirements.map((req, index) => (
										<ListItem key={index}>
											<ListItemText
												primary={req}
												primaryTypographyProps={{ variant: 'body2' }}
											/>
										</ListItem>
									))}
								</List>

								<Divider sx={{ my: 2 }} />

								<Typography variant="h6" gutterBottom color="primary">
									MUI Components to Use
								</Typography>
								<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
									{task.muiComponents.map((component, index) => (
										<Chip
											key={index}
											label={component}
											size="small"
											variant="outlined"
										/>
									))}
								</Box>

								<Divider sx={{ my: 2 }} />

								<Typography variant="h6" gutterBottom color="primary">
									Hints & Tips
								</Typography>
								<List dense>
									{task.hints.map((hint, index) => (
										<ListItem key={index}>
											<ListItemText
												primary={hint}
												primaryTypographyProps={{
													variant: 'body2',
													fontStyle: 'italic',
												}}
											/>
										</ListItem>
									))}
								</List>

								<Divider sx={{ my: 2 }} />

								<Typography variant="h6" gutterBottom color="primary">
									Expected Result
								</Typography>
								<Alert severity="success" sx={{ mt: 1 }}>
									<Typography variant="body2">{task.expectedResult}</Typography>
								</Alert>

								<Box
									sx={{ mt: 3, p: 2, bgcolor: 'info.light', borderRadius: 1 }}
								>
									<Typography variant="subtitle2" gutterBottom>
										💡 Next Steps:
									</Typography>
									<Typography variant="body2" component="div">
										1. Create a new page/component for this task (e.g.,{' '}
										<code>Task1Page.jsx</code> or{' '}
										<code>ProfileInsightsPage.jsx</code>)
										<br />
										2. Import the API function:{' '}
										<code>
											import {'{'} {task.apiFunction} {'}'} from
											'../services/api'
										</code>
										<br />
										3. Set up state management (useState for data, loading,
										error)
										<br />
										4. Fetch data in useEffect hook
										<br />
										5. Create necessary components (e.g., UserCard component)
										<br />
										6. Display data using MUI components as specified
										<br />
										7. Test your implementation and handle edge cases
									</Typography>
								</Box>
							</CardContent>
						</Card>
					</AccordionDetails>
				</Accordion>
			))}
		</Container>
	);
}

export default TasksPage;
