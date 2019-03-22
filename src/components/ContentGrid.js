import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ListItemIcon} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        height: '100vh',
        overflow: 'auto'
    }
});

function renderData(props) {
    const {data, selected, setSelected} = props;

    function renderChip(x) {
        let chip;
        switch (x) {
            case 'New':
                chip = (<Chip label={'New'} color={'default'}/>);
                break;
            case 'Sending':
                chip = (<Chip label={'Sending'} color={'primary'}/>);
                break;
            case'Verifying':
                chip = (<Chip label={'Verifying'} color={'primary'}/>);
                break;
            case 'PartialFill':
                chip = (<Chip label={'PartialFill'} color={'primary'}/>);
                break;
            case 'Filled':
                chip = (<Chip label={'Filled'} color={'secondary'}/>);
                break;
            default:
                chip = (<div>NULL</div>);
                break;
        }

        return chip
    }

    const listItem = _.map(data, x => {
        return (
            <ListItem key={x.id} onClick={() => setSelected(x)}
                      dense button
                      selected={selected.id === x.id}>
                <ListItemText primary={JSON.stringify(x)}/>
                <ListItemIcon>
                    {renderChip(x)}
                </ListItemIcon>
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
    const {classes, setData} = props;


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
                {renderData(props)}
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