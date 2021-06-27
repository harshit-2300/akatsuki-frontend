import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div>  
    <h3>Subject</h3>
    <div className={classes.root}>
      
      
      <div>
        <TextField
          id="outlined-full-width"
          label="Subject"
          size="normal"
          style={{ margin: 40 }}
          placeholder="Placeholder"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        
    
        
      </div>
    </div>
    </div>
  );
}
