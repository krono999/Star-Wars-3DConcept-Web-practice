import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Divider, ListItem, ListItemText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'orange',
        display: 'flex',
    },

}));



const CharacterList = ({ characters }) => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return characters.map((c) => <div className={classes.root}>
        <List component="list" aria-label="characters">
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemText>
                    {c.name}
                </ListItemText>
            </ListItem>
        </List>
        <Divider />
    </div>);
};

export default CharacterList;



