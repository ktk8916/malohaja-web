import './App.css';
import MyRoutes from './routes/MyRoutes';
import { ThemeProvider } from '@mui/material';
import { useThemeStore } from './stores/store';

function App() {
  const { theme } = useThemeStore((state) => state);
  return (
    <ThemeProvider theme={theme}>
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
