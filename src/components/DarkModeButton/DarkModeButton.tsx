import React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DarkModeButton = ({setTheme}:{setTheme(smthTheme: 'light' | 'dark'):void}) => {
    const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    }

    return(
        <Box>
            <Grid container justifyContent='flex-end' alignItems="baseline">
                <Grid item>
                    <Switch onChange={onSwitchChange} />
                </Grid>
                <Grid item>
                    <Typography variant='caption'>
                        Dark mode
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DarkModeButton;