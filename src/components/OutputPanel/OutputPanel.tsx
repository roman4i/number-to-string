import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';

const OutputPanel = () => {
    const [tabPosition, setTabPosition] = useState<number|false>(false);
    const [tabData, setTabData] = useState('Waiting for a new data...');

    const handleChange = (events: React.SyntheticEvent, val: number) => {
        setTabPosition(val);
    }

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