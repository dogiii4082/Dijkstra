import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'

const Temp = () => {
    const [data, setData] = useState('')

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
        <Fragment>
            123
            {data}
        </Fragment>
    )
}

export default Temp