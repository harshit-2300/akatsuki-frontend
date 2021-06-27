import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h3>Email</h3>
      <div>
        
        <TextField
          id="outlined-multiline-static"
          label="Body"
          multiline
          rows={4}
          defaultValue="Enter your mail"
          variant="outlined"
        />
      </div>
    </form>
  );
}
