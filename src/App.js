import React, {useState} from 'react';
import './App.css';
import ContentGrid from "./components/ContentGrid";
import ControlGrid from "./components/ControlGrid";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
    root: {
        flexGrow: 1,
    }
});

function App(props) {
    const {classes} = props;
    const [selected, setSelected] = useState({});

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={9}>
                    <ContentGrid selected={selected} onSelected={setSelected}/>
                </Grid>
                <Grid item xs={3}>
                    <ControlGrid selected={selected}/>
                </Grid>
            </Grid>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

