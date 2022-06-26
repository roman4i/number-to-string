import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import processUA from '../../utils/toUkrainian';

const OutputPanel = ({inputNumber}:{ inputNumber: string }) => {
    const [tabPosition, setTabPosition] = useState<number|false>(false);
    const [tabData, setTabData] = useState('Waiting for a new data...');

    const handleChange = (events: React.SyntheticEvent, val: number) => {
        setTabPosition(val);
    }
    useEffect(() => {
        if(tabPosition === 0) {
            setTabData('For english');
        }
        if(tabPosition === 1) {
            setTabData(processUA(inputNumber));
        }
    }, [tabPosition, inputNumber]);

    return(
        <div>
            <Box>
            <Tabs value={tabPosition} onChange={handleChange}>
                <Tab label="English" />
                <Tab label="Ukrainian" />
            </Tabs>
            </Box>
            <Box >
                <div role="tabpanel" >
                    <Typography sx={{paddingTop: 3, paddingLeft: 2}}>
                        {tabData}
                    </Typography>
                </div>
            </Box>
        </div>
    );
};

export default OutputPanel;