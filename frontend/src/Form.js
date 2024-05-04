import { Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Form = () => {

    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h3">포탈 찾기</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Select options={options}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Form