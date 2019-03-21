import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: 'green',
        height: '100vh'
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