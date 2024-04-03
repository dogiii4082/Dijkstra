import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Building from './Building';
import FromTo from './FromTo';

const Temp = () => {
    const [data, setData] = useState('')
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    useEffect(() => {
        axios.get('http://localhost:84/api')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList centered onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1"><Building /></TabPanel>
            <TabPanel value="2"><FromTo /></TabPanel>
        </TabContext>
    )
}

export default Temp