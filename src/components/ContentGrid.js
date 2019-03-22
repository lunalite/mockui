import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        height: '100vh',
        overflow: 'auto'
    },
});

function renderData(data, selected, setSelected) {
    function renderList(x) {
        return (
            <React.Fragment>
                <ListItemText primary={JSON.stringify(x)}/>
            </React.Fragment>
        )
    }

    const listItem = _.map(data, x => {
        return (
            <ListItem key={x.id} onClick={() => setSelected(x)}
                      dense button
                      selected={selected.id === x.id}
            >
                {renderList(x)}
            </ListItem>
        )
    });

    return (
        <List>
            {listItem}
        </List>
    )
}

function ContentGrid(props) {
    const {classes, selected, onSelected} = props;
    const [data, setData] = useState({});

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/todos/')
        //     .then(response => response.json())
        //     .then(json => setData(json));
        setData([
            {
                id: '1'
            }, {
                id: '2'
            }
        ])
    }, []);

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                {renderData(data, selected, onSelected)}
            </Paper>
        </div>
    )
}

ContentGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    selected: PropTypes.object,
    setSelected: PropTypes.func
};

export default withStyles(styles)(ContentGrid);