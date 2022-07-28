import {StrictMode} from 'react';

// ✅ now importing from react-dom/client
import {createRoot} from 'react-dom/client';
import {createTheme} from '@mui/material';
import {ThemeProvider} from '@mui/styles';
import App from './App';

// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const theme = createTheme();
root.render(
  <ThemeProvider theme={theme}>
  <StrictMode>
    <App />
  </StrictMode>
  </ThemeProvider>
);

