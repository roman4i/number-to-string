import React from 'react';
import Box from '@mui/material/Box';
import PageTitle from '../PageTitle/PageTitle';

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

  return (
    <Box sx={ MainBoxStyle }>
      <PageTitle />
    </Box>
  );
}

export default App;
