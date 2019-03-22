import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button, Card, CardContent, CardHeader} from "@material-ui/core";
import {Actions} from '../utils/Actions';

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
    const {classes, setData} = props;

    function handleSend(event) {
        switch (event.target.firstChild.textContent) {
            case Actions.SEND:
                // TODO: Do a post and then call render on parent.
                fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.json())
                    .then(json => setData(json));
                break;
            case Actions.VERIFY:
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(json => setData(json));
                break;
            case Actions.FILL:
                fetch('https://jsonplaceholder.typicode.com/albums')
                    .then(response => response.json())
                    .then(json => setData(json));
                break;
            default:
                event.preventDefault()
        }
    }

    return (
        <React.Fragment>
            <Button variant={'contained'} className={classes.button} onClick={handleSend}>
                {Actions.SEND}
            </Button>
            <Button variant={'contained'} className={classes.button} onClick={handleSend}>
                {Actions.VERIFY}
            </Button>
            <Button variant={'contained'} className={classes.button} onClick={handleSend}>
                {Actions.FILL}
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