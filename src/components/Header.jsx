import React from 'react';
import AuthProvider from '../providers/AuthProvider';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Components

const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
    colorPrimary: '#3191E7'
};

function Header(props) {
    return (
        <AuthProvider.Consumer>
            {
                user => ( <HeaderBase {...props} user={user} /> )
            }
        </AuthProvider.Consumer>
    );
}

class HeaderBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { user, classes } = this.props;
        console.log(user)
        return (
            <div className={classes.root}>
                <AppBar position="sticky" color="primary" classes={classes}>
                    <Toolbar style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h4" align="center" color="inherit">
                            <span style={{ marginLeft: 'auto', marginRight: 'auto', width: '100px' }}>Galax</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);