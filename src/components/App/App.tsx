import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';
import PageTitle from '../PageTitle/PageTitle';
import NumberInput from '../NumberInput/NumberInput';
import OutputPanel from '../OutputPanel/OutputPanel';
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    allVariants: {
      color: '#fff',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [number, setNumber] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const BaseStyle = {
    backgroundColor: currentTheme.palette.background.default,
    height: '100vmin',
    boxSizing: 'border-box',
    paddingTop: 5,
  }

  const MainBoxStyle = {
    width: 600,
    border: '1px lightgray solid', 
    borderRadius: 3,
    padding: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: theme === 'dark' ? grey[800] : lightTheme.palette.background.default,
  }

  useEffect(() => {
    setCurrentTheme(theme === 'light' ? lightTheme : darkTheme);
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={BaseStyle}>
        <Box sx={ MainBoxStyle }>
          <Grid container>
            <Grid item xs={ 9 }>
              <PageTitle />
            </Grid>
            <Grid item xs={ 3 } >
              <DarkModeButton setTheme={ setTheme } />
            </Grid>
          </Grid>
          <NumberInput setNumber={ setNumber } />
          <Divider />
          <OutputPanel inputNumber={ number } />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
