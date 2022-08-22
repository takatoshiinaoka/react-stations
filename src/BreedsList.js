/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { Grid,Typography, Select, Button } from "@material-ui/core";

export const BreedsList = (props) => {
    const {
        breeds,
        selectedBreed,
        handleChange,
        handleGetBreedsUrl
    } = props

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}></Grid>
            <Grid item xs>
                <Typography type='body1'>Breeds List</Typography>
            </Grid>
            <Grid item xs>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedBreed} 
                    onChange={(e) => handleChange(e)}
                >
                    {breeds.map((item) => <option value={item}>{item}</option>)}
                </Select>
            </Grid>
            <Grid item xs>
                <Button variant="contained" color="primary" onClick={handleGetBreedsUrl}>
                    更新
                </Button>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}