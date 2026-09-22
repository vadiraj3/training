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
import "./App.css";
import ContactGetPage from "./pages/CONTACTFOLDER/ContactGetPage";
import ContactPutPage from "./pages/CONTACTFOLDER/ContactPutPage";
import ContactPostPage from "./pages/CONTACTFOLDER/ContactPostPage";
import TasksGetPage from "./pages/TASKSFOLDER/TasksGetPage";
import TasksPostPage from "./pages/TASKSFOLDER/TasksPostPage";
import TaskPutPagejsx from "./pages/TASKSFOLDER/TaskPutPage.jsx";
import ProductGetPage from "./pages/PRODUCTSFOLDER/ProductGetPage.jsx";
import ProductPostPage from "./pages/PRODUCTSFOLDER/ProductPostPage.jsx";
import ProductPutPage from "./pages/PRODUCTSFOLDER/ProductPutPage.jsx";
import EventGetPage from "./pages/EVENTSFOLDER/EventGetPage.jsx";
import EventPostPage from "./pages/EVENTSFOLDER/EventPostPage.jsx";
import EventPutPage from "./pages/EVENTSFOLDER/EventPutPage.jsx";
import OrderGetPage from "./pages/ORDERSFOLDER/OrderGetPage.jsx";
import OrderPostPage from "./pages/ORDERSFOLDER/OrderPostPage.jsx";
import OrderPutPage from "./pages/ORDERSFOLDER/OrderPutPage.jsx";
import SupportGetPage from "./pages/SUPPORTTICKETSFOLDER/SupportGetPage.jsx";
import SupportPostPage from "./pages/SUPPORTTICKETSFOLDER/SupportPostPage.jsx";
import SupportPutPage from "./pages/SUPPORTTICKETSFOLDER/SupportPutPage.jsx";

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
              location.pathname === "/tasks"
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
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
              location.pathname === "/starter-views"
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
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
    <Container maxWidth="xl" sx={{ py: 4, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom color="black">
        Welcome to API Integration Training - Level 3
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Learn how to integrate APIs with React, Axios, and Material-UI while
        handling complex objects and unusual response shapes
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button variant="contained" size="large" component={Link} to="/tasks">
          View All Tasks
        </Button>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          to="/starter-views"
        >
          View Starter Views
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
          ////CONTACTS////
          <Route path="/contact-get-page" element={<ContactGetPage />} />
          <Route path="/contact-post-page" element={<ContactPostPage />} />
          <Route path="/contact-put-page/:id" element={<ContactPutPage />} />
          ////TASKS////
          <Route path="/tasks-get-page" element={<TasksGetPage />} />
          <Route path="/tasks-post-page" element={<TasksPostPage />} />
          <Route path="/tasks-put-page/:id" element={<TaskPutPagejsx />} />
          ////PRODUCTS////
          <Route path="/product-get-page" element={<ProductGetPage />} />
          <Route path="/product-post-page" element={<ProductPostPage />} />
          <Route path="/product-put-page/:id" element={<ProductPutPage />} />
          ///EVENTS///
          <Route path="/event-get-page" element={<EventGetPage />} />
          <Route path="/event-post-page" element={<EventPostPage />} />
          <Route path="/event-put-page/:id" element={<EventPutPage />} />
          ///ORDERS///
          <Route path="/order-get-page" element={<OrderGetPage />} />
          <Route path="/order-post-page" element={<OrderPostPage />} />
          <Route path="/order-put-page/:id" element={<OrderPutPage />} />
          ///SUPPORT TICKETS///
          <Route path="/support-get-page" element={<SupportGetPage />} />
          <Route path="/support-post-page" element={<SupportPostPage />} />
          <Route path="/support-put-page/:id" element={<SupportPutPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
