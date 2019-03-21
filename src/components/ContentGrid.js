import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from "@material-ui/core/es/internal/svg-icons/CheckBox";


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        backgroundColor: 'pink',
        height: '100vh',
        overflow: 'auto'
    },
});

function renderData(data) {
    let listItem = ['Loading...'];
    if (data.length > 0) {
        listItem = _.map(data, x =>
            <ListItem key={x.id}>
                <CheckBox
                    checked={false}
                    disableRipple
                />
                <ListItemText primary={JSON.stringify(x)}/>
            </ListItem>
        )
    }
    return (
        <List>
            {listItem}
        </List>
    )
}

function ContentGrid(props) {
    const {classes} = props;
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                {renderData(data)}
            </Paper>
        </div>
    )
}

ContentGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentGrid);