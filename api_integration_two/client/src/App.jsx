import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import TodosPage from './pages/TodosPage';
import ProjectsPage from './pages/ProjectsPage';
import OrdersPage from './pages/OrdersPage';
import TicketsPage from './pages/TicketsPage';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <>
      <CssBaseline />
      <AppLayout>
        <Container sx={{ py: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </AppLayout>
    </>
  );
}

export default App;
