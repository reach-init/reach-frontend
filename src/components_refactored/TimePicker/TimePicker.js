import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();


	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	var hh = String(today.getHours()).padStart(2, '0');
	var min = String(today.getMinutes()).padStart(2, '0');

	today = yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min;

  console.log(today)
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Pick a date and an hour"
        type="datetime-local"
        defaultValue={today}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}