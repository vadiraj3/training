import { Container, CssBaseline } from '@mui/material';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ py: 3 }}>
        <CatalogPage />
      </Container>
    </>
  );
}

export default App;
