import { Button, Grid, Typography } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import Select from 'react-select'
import Textarea from '@mui/joy/Textarea';
import axios from "axios";
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const initialOptions = [
    { value: '', label: '선택' }
]

const Form = () => {
    const [options, setOptions] = useState(initialOptions)
    const [building, setBuilding] = useState(initialOptions[0])
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
        if (building.value === '') {
            alert('건물을 선택해주세요!')
            return
        }

        axios.post('http://localhost:8080/api/form', {
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
        axios.get('http://localhost:8080/api/building_list')
        .then((res) => {
            const newOptions = res.data.map((option) => ({ value: option, label: option}))
            setOptions([...initialOptions, ...newOptions])
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h3">포탈 찾기</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                    <Grid item xs={6}>
                        <Select
                            options={options}
                            required={true}
                            defaultValue={building}
                            value={building}
                            onChange={setBuilding}
                            noOptionsMessage={1}
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', 'justifyContent': 'end' }}>
                        <Button type='submit'>등록</Button>
                    </Grid>
                </form>
            </Grid>
        </Fragment>
    )
}

export default Form