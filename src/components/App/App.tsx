import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PageTitle from '../PageTitle/PageTitle';
import NumberInput from './NumberInput/NumberInput';
import OutputPanel from '../OutputPanel/OutputPanel';

function App() {
  const MainBoxStyle = {
    width: 600,
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: 5,
    border: '1px lightgray solid', 
    borderRadius: 3 ,
    padding: 3,
  }

  const [number, setNumber] = useState('');

  return (
    <Box sx={ MainBoxStyle }>
      <PageTitle />
      <NumberInput setNumber={ setNumber } />
      <Divider />
      <OutputPanel />
    </Box>
  );
}

export default App;
