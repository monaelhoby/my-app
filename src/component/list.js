import React , {Component , Fragment} from 'react';
import { makeStyles ,withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import '../App.css';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign : 'center'
  },
  textField: {
    width:"40%",
    marginRight: theme.spacing(2),
    marginTop:"10px"
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    background: "#7f2a65"
  },
  buttone: {
    margin: theme.spacing(1),
    padding:"15px",
    background: "#7f2a65",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));



class Form  extends Component {

  state = {
    isEdit : false
  }

    //toggle State

    toggleState = () =>{
      let {isEdit} = this.state ;
      this.setState({
        isEdit : !isEdit
      })
    }

    updateRow = (e) => {
      e.preventDefault();
      this.props.editRow(this.props.index,this.inputname.value,this.ageValue);
      this.toggleState();
    }



RenderSimpleForm = () => {

    const classes = this.props;
     return (
       <div>
      <span className="span1" >{this.props.details.name} </span>
      <span  className="span2" >{this.props.details.age}</span>
      <Button className="buttonAdd" variant="contained" type="submit"  onClick={ () => {this.toggleState()}}>Edit  </Button>
       <Button variant="contained" type="submit" className={classes.button}
        onClick={ () => {this.props.deleteRow(this.props.index)}}>
          Delete
        </Button>
      </div>
    )
}

render (){

  let {isEdit} = this.state ;

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

  //render update addRow
  const RenderUpdateRow = () => {

    const classes = useStyles();
      const inputLabel = React.useRef(null);
      const [labelWidth, setLabelWidth] = React.useState(0);
      React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);

     return (
    <form  className={classes.container} noValidate autoComplete="off" onSubmit={this.updateRow}>
     <ValidationTextField
             id="outlined-name"
             label="Name"
             className={classes.textField}
             defaultValue={this.props.details.name}
             margin="normal"
             variant="outlined"
             inputRef={(v) => {this.inputname = v} }
           />
           <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="age-customized-select">
              Age
            </InputLabel>
            <Select
              value={this.props.details.age}
              onChange={(e) => {this.ageValue = e.target.value }}
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
           <Button variant="contained" type="submit" className={classes.buttone}>
              Update
            </Button>
     </form>
   )
        }

   return (

     <Fragment>
     <ul>
     {isEdit ?  <RenderUpdateRow details={this.props.details}/> : this.RenderSimpleForm() }
     </ul>
     </Fragment>

  )};
}

export default Form;
