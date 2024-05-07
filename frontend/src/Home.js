import React, { Fragment, useEffect, useState } from 'react';
import Select from 'react-select'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const initialOptions = [
    { value: '', label: '전체' }
]

const Home = () => {
    const navigate = useNavigate()
    const [options, setOptions] = useState(initialOptions)
    const [building, setBuilding] = useState(initialOptions[0])
    const [portal, setPortal] = useState([])

    useEffect(() => {
        axios.get('http://localhost:84/api/building_list')
        .then((res) => {
            const newOptions = res.data.map((option) => ({ value: option, label: option}))
            setOptions([...initialOptions, ...newOptions])
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:84/api/portal', { params: { name: building.value } })
        .then((res) => {
            setPortal(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [building])
    
    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h3">포탈 찾기</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Select 
                        options={options} 
                        defaultValue={initialOptions[0]}
                        onChange={setBuilding}
                    />
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => navigate('/form')}>추가</Button>
                </Grid>
                <Grid item>
                    {portal.map(item => <li>{item.portal}</li>)}
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Home