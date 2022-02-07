import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        // marginTop: '10%',
        maxWidth: 200,
        backgroundColor: '#FFA500',
        // alignContent: 'center',
        // justifyContent: 'center'
        marginLeft: '29%'

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



