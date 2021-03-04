import React, { useState } from 'react';
import { Paper, Switch } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default function DarkModeButton({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Switch
          button
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        {children}
      </Paper>
    </ThemeProvider>
  );
}
