import React, { Fragment, useEffect, useState } from 'react';
import Select from 'react-select'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Col, Row, Button } from 'reactstrap'

const initialOptions = [
    { value: '', label: '전체' }
]

const Home = () => {
    const navigate = useNavigate()
    const [options, setOptions] = useState(initialOptions)
    const [building, setBuilding] = useState(initialOptions[0])
    const [portal, setPortal] = useState([])

    useEffect(() => {
        axios.get('http://dijkstra-hyu.site:84/api/building_list')
        .then((res) => {
            const newOptions = res.data.map((option) => ({ value: option, label: option}))
            setOptions([...initialOptions, ...newOptions])
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    useEffect(() => {
        axios.get('http://dijkstra-hyu.site:84/api/portal', { params: { name: building.value } })
        .then((res) => {
            setPortal(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [building])
    
    return (
        <Fragment>
            <Row>
                <Typography variant="h3" style={{ display: 'flex', justifyContent: 'center' }}>포탈 찾기!!!</Typography>
            </Row>
            <Row>
                <Col xs={8}>
                    <Select 
                        options={options} 
                        defaultValue={initialOptions[0]}
                        onChange={setBuilding}
                    />
                </Col>
                <Col>
                    <Button color='primary' onClick={() => navigate('/form')}>추가</Button>
                </Col>
            </Row>
            <Row>
                {portal.map(item => <li>{item.portal}</li>)}
            </Row>
        </Fragment>
    )
}

export default Home