import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageTitle = () => {
    return (
        <Box>
            <Typography variant='h5' >
                Number to Text App
            </Typography>
            <Typography variant='subtitle1' >
                This app converting numbers to text using selected language 
            </Typography>
        </Box>
    )
}

export default PageTitle;