import { Typography } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import Select from 'react-select'
import Textarea from '@mui/joy/Textarea';
import axios from "axios";
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Row, Form, Button } from 'reactstrap'

const initialOptions = [
    { value: '', label: '선택' }
]

const Register = () => {
    const [options, setOptions] = useState(initialOptions)
    const [building, setBuilding] = useState(initialOptions[0])
    const [selectError, setSelectError] = useState(true)
    const navigate = useNavigate()

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            portal: ''
        }
    })

    const onSubmit = (data) => {
        if (selectError) {
            return
        }

        axios.post('http://localhost:84/api/form', {
            name: building.value,
            portal: data.portal
        })
        .then((res) => {
            if (res.status === 200) {
                navigate('/')
            }
        })
        .catch((err) => {
            console.error(err)
        })
    }

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
        if (building.value === '') {
            setSelectError(true)
        } else {
            setSelectError(false)
        }
    }, [building])

    return (
        <Fragment>
            <Row>
                <Typography variant="h3">포탈 찾기</Typography>
            </Row>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Select
                        options={options}
                        required={true}
                        defaultValue={building}
                        value={building}
                        onChange={setBuilding}
                        noOptionsMessage={1}
                    />
                    {selectError && <>건물을 선택해주세요!</>}
                </Row>
                <Row>
                    <Controller
                        control={control}
                        rules={{required: true}}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Textarea 
                                name="Outlined"
                                placeholder="알고 있는 포탈을 입력해 주세요!"
                                variant="outlined"
                                minRows={3}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                        name="portal"
                    />
                    {errors.portal && <>입력해주세요!</>}
                </Row>
                <Row>
                    <Button type='submit' color="primary">등록</Button>
                </Row>
            </Form>
        </Fragment>
    )
}

export default Register