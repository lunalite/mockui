import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button, Card, CardContent, CardHeader} from "@material-ui/core";

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: 'green',
        height: '100vh',
    },
    powerCard: {
        backgroundColor: 'lightBlue'
    },
    card: {
        marginTop: '10px',
        backgroundColor: 'pink',
    },
    button: {
        margin: '5px'
    }
});

function renderPower(props) {
    const {classes} = props;

    return (
        <React.Fragment>
            <Button variant={'contained'} className={classes.button}>
                Send
            </Button>
            <Button variant={'contained'} className={classes.button}>
                Verify
            </Button>
            <Button variant={'contained'} className={classes.button}>
                Fill
            </Button>
        </React.Fragment>
    )
}

function ControlGrid(props) {
    const {classes, selected} = props;

    return (
        <div>
            <Paper className={classes.paper} elevation={1}>
                <Card className={classes.powerCard}>
                    <CardHeader title={'Controls'}/>
                    <CardContent>
                        {renderPower(props)}
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardHeader title={'Selected'}/>
                    <CardContent>
                        {JSON.stringify(selected)}
                    </CardContent>
                </Card>
            </Paper>
        </div>
    )
}

ControlGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlGrid);