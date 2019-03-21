import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import green from "@material-ui/core/es/colors/green";


const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        backgroundColor: 'green',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
});


function ControlGrid(props) {
    const {classes} = props;

    return (
        <div>
            <Paper className={classes.paper} elevation={1}>
                Control
            </Paper>
        </div>
    )
}

ControlGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlGrid);