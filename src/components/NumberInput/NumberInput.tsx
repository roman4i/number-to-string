import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type props = {
    setNumber:(val: string) => void;
}

const NumberInput = ({setNumber}:props) => {
    const [fieldText, setFieldText] = useState('');
    const [errorField, setErrorField] = useState(' ');

    const processText = () => {
        if(isNaN(parseInt(fieldText))) {
            setErrorField('Not a number')
        } else {
            setNumber(fieldText);
        }
        if(fieldText === '') {
            setErrorField("Can`t be empty!");
        }
    }

    const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.currentTarget.value === ' ') {
            setFieldText('');
        } else {
            setFieldText(event.currentTarget.value);
            setErrorField(' ');
        }
    }

    return(
        <Box sx={{ width: '100%' }}>
            <Grid container alignItems="center">
                <Grid item xs={ 10 }>
                    <TextField 
                        label="Type number here" 
                        variant="standard" 
                        onChange={ handleTextField } 
                        helperText={ errorField }
                        value={ fieldText }
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" onClick={ processText } >Process</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default NumberInput;