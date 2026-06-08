import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import TasksPage from "./pages/TasksPage";
import "./App.css";
import TaskCard1 from "./pages/TaskCard1";
import Taskcard2 from "./pages/Taskcard2";
import TaskCard3 from "./pages/TaskCard3";
import TaskCard4 from "./pages/TaskCard4";
import Taskcard5 from "./pages/Taskcard5";
import TaskCard6 from "./pages/TaskCard6";
import TaskCard7 from "./pages/TaskCard7";
import TaskCard8 from "./pages/TaskCard8";
import TaskCard9 from "./pages/TaskCard9";
import TaskCard10 from "./pages/TaskCard10";

function Navigation() {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          API Integration Training
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/tasks"
          sx={{
            backgroundColor:
              location.pathname === "/tasks"
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
          }}
        >
          Tasks
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom color="black">
        Welcome to API Integration Training
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Learn how to integrate APIs with React, Axios, and Material-UI
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" size="large" component={Link} to="/tasks">
          View All Tasks
        </Button>
      </Box>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/taskcard1" element={<TaskCard1 />} />
          <Route path="/taskcard2" element={<Taskcard2 />} />
          <Route path="/taskcard3" element={<TaskCard3 />} />
          <Route path="/taskcard4" element={<TaskCard4 />} />
          <Route path="/taskcard5" element={<Taskcard5 />} />
          <Route path="/taskcard6" element={<TaskCard6 />} />
          <Route path="/taskcard7" element={<TaskCard7 />} />
          <Route path="/taskcard8" element={<TaskCard8 />} />
          <Route path="/taskcard9" element={<TaskCard9 />} />
          <Route path="/taskcard10" element={<TaskCard10 />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
