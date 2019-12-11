
import React from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  container: {
    textAlign : 'center'
  },
  textField: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop:"9px",
    width:"40%",
    color:"#FFF"
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
      background: "#f9c017",
      padding:"15px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


const ToDoForm = props => {

  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        // borderColor: '#fff',
        // borderWidth: 2,
        color:"#FFF"
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        // borderColor: '#FFF',
        color:"#FFF"
      },
    },
  })(TextField);


  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={props.addRow}>
        <TextField 
                id="outlined-basic"
                label="Name"
                className={classes.textField}
                value={props.current}
                onChange={props.updateName}
                margin="normal"
                variant="outlined"
              />
              <FormControl variant="outlined" className={classes.formControl}>
               <InputLabel ref={inputLabel} htmlFor="age-customized-select">
                 Age
               </InputLabel>
               <Select
                 value={props.age}
                 onChange={props.updateAge}
                 input={<OutlinedInput labelWidth={labelWidth} name="age" id="age-customized-select" />}

               >
                 <MenuItem value="">
                   <em>None</em>
                 </MenuItem>
                 <MenuItem value={10}>Ten</MenuItem>
                 <MenuItem value={20}>Twenty</MenuItem>
                 <MenuItem value={30}>Thirty</MenuItem>
               </Select>
             </FormControl>
              <Button variant="contained" type="submit" className={classes.button}>
                 Add New
               </Button>
    </form>
)
}

export default ToDoForm ;
