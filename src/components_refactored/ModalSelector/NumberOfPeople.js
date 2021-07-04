import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function NumberOfPeople({max=10}) {
    const classes = useStyles();
    const [number, setNumber] = React.useState(1);

    const handleChange = (event) => {
      setNumber(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            {/* <InputLabel shrink id="demo-simple-select-placeholder-label-label"> */}
            <Typography>Number of people</Typography>
                
            {/* </InputLabel> */}
            <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={number}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            >
                

            {Array(max).fill().map((v,i)=>i).map(i =>
                <MenuItem value={i+1}>{i+1}</MenuItem>
            )}
            </Select>
            <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
    )
}