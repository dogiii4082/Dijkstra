// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Temp = () => {
    const [data, setData] = useState('')

    // useEffect(() => {
    //     fetch(`http://localhost:84/api`, {
    //         headers: {
    //             Accept: "application/json",
    //         },
    //         method: 'GET'
    //     })
    //     // .then(response => response.json())
    //     .then((res) => console.log(res))
    // }, [])

    useEffect(() => { // 컴포넌트가 마운트 될 때 실행
        springDataSet();
    },[])

    async function springDataSet() { // Axios 방식 사용
        await axios
        .get(`http://localhost:84/api`) // 해당 URL에 HTTP GET 요청 
        .then((res)=>{
            console.log(res);
            setData(res.data); // GET 요청하여 응답받은 data
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            123
            {data}
        </>
    )
}

export default Temp