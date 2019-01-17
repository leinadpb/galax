import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Plants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plantList: [
                { name: 'plant 1', id: 1, machines: [] },
                { name: 'plant 2', id: 2, machines: [] },
                { name: 'plant 3', id: 3, machines: [] },
                { name: 'plant 4', id: 4, machines: [] },
            ]
        }
    }

    render() {
        const { classes } = this.props;
        const { plantList } = this.state;

        return (
            <div classes={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={1}>
                        
                    </Grid>
                    <Grid item xs={10}>
                        <div style={{ padding: '5px', marginTop: '50px' }}>
                            <Paper className={classes.paper}>
                                <div style={{ margin: '7px' }}>
                                    <h3 style={{ fontWeight: '600' }}>Plantas disponibles</h3>
                                </div>
                                <div style={{ marginTop: '5px' }}>
                                    <List component="nav">
                                        {plantList.map(element => (
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <InboxIcon />
                                                </ListItemIcon>
                                                <ListItemText key={element.id} primary={element.name} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Plants);