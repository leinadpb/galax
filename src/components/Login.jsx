import React from 'react';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AuthProvider from '../providers/AuthProvider';
import * as ROUTES from '../constants/Routes';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  wrapper: {
      width: '60%',
      margin: 'auto',
      padding: '15px',
      marginTop: '50px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function Login(props) {
    return (
        <AuthProvider.Consumer>
            {
                user => ( <LoginBase {...props} user={user} /> )
            }
        </AuthProvider.Consumer>
    );
}

class LoginBase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailField: '',
            passwordField: ''
        }

        // bindings
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.makeSubmit = this.makeSubmit.bind(this);
    }

    emailChange (event) {
        this.setState({
            emailField: event.target.value
        });
    };

    passwordChange (event) {
        this.setState({
            passwordField: event.target.value
        });
    }

    makeSubmit (event) {
        event.preventDefault();
        const { emailField, passwordField } = this.state;
        const { user } = this.props;
        
        if (user === undefined) {
            return;
        }

        alert(user.login(emailField, passwordField));
        this.props.history.push(ROUTES.PLANTS);
    }

    render() {
        const { classes } = this.props;
        const { emailField, passwordField } = this.state;

        return (
          <div className={classes.wrapper}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h3">
                  <div style={{ textAlign: 'center', marginTop: '5px', marginBottom: '20px' }}>
                      Iniciar sesión
                  </div>
              </Typography>
              <div style={{textAlign: 'center', padding: '10px'}}>
                    <TextField
                      id="standard-name"
                      label="Email"
                      className={classes.textField}
                      value={emailField}
                      onChange={this.emailChange}
                      autoComplete="current-email"
                      margin="normal" />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        value={passwordField}
                        autoComplete="current-password"
                        onChange={this.passwordChange}
                        margin="normal" />
                    <div style={{ margin: '15px' }}>
                        <Button onClick={this.makeSubmit} variant="contained" color="secondary" className={classes.button}>
                            Iniciar sesión
                        </Button>
                    </div>
              </div>
            </Paper>
          </div>
        );
    }
}


export default withRouter(withStyles(styles)(Login));