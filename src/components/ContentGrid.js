import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


function ContentGrid(props) {
    const {classes} = props;

    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setData(json))
    });

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                {JSON.stringify(data)}
            </Paper>
        </div>
    )
}

ContentGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentGrid);