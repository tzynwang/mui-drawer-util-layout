import React, { memo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppLayout from '@Components/Layout/App';

const THEME = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(',')
  }
});

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  );
}

export default memo(App);
