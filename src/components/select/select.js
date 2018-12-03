import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import signValue from './signValue';
import './select.css'

console.log(signValue[0])
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    signo : 'signoMeu'
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
             
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-seuSigno-simple"
          >
            Selecione Seu Signo
          </InputLabel>
          <Select
         
            value={this.state.signo}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="Seu Signo"
                id="outlined-seuSigno-simple"
              />
            }
          >
            <MenuItem value="">
              <em>Selecione o seu signo:</em>
            </MenuItem>
            <MenuItem value={0}>Áries</MenuItem>
            <MenuItem value={1}>Touro</MenuItem>
            <MenuItem value={2}>Gêmeos</MenuItem>
            <MenuItem value={3}>Câncer</MenuItem>
            <MenuItem value={4}>Leão</MenuItem>
            <MenuItem value={5}>Virgem</MenuItem>
            <MenuItem value={6}>Libra</MenuItem>
            <MenuItem value={7}>Ecorpião</MenuItem>
            <MenuItem value={8}>Sagitário</MenuItem>
            <MenuItem value={9}>Capricórnio</MenuItem>
            <MenuItem value={10}>Aquário</MenuItem>
            <MenuItem value={11}>Peixes</MenuItem>
          </Select>
        </FormControl>
        
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
