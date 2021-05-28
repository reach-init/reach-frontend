import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {   0.5: 'Nu mi-as mai comanda',   1: 'II cu ketchup din ala 5 lei galeata',   1.5: 'Sub medie',   2: 'Nu ii nu stiu ce',   2.5: 'Merge bagat cand ai 5 lei',   3: 'Pa la medie p-acolo',   3.5: 'Ni, ii bun',   4: 'Hopa! Trece nitel da medie',   4.5: 'Pasta medie',   5: 'II clar paste medie', };

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}
