import React from 'react';
import './App.css';
import ContentGrid from "./components/ContentGrid";
import ControlGrid from "./components/ControlGrid";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

function App(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={9}>
                    <ContentGrid/>
                </Grid>
                <Grid item xs={3}>
                    <ControlGrid/>
                </Grid>
            </Grid>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

