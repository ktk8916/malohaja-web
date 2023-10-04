import './App.css';
import MyRoutes from './routes/MyRoutes';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { useThemeStore } from './stores/store';

function App() {
  const { theme } = useThemeStore((state) => state);
  return (
    <>
      <GlobalStyles
        styles={{
          a: { textDecoration: 'none' },
        }}
      />
      <ThemeProvider theme={theme}>
        <MyRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
