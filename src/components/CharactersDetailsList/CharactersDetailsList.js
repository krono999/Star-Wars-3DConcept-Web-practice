// React
import React from 'react';
// Material Ui Components
import { /* Grid, Paper, Typography,  *//* Button  */ } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, IconButton, ListItem, ListItemText, Divider, Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
//material-ui Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//Components
import CharactersButton from '../CharactersButton/CharactersButton';
import MoviesButton from '../MoviesButton/MoviesButton';



const drawerWidth = 424;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#ffa000",
        // backgroundColor: 'transparent',
        marginLeft: '600px',
        marginTop: '70px'

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        minHeight: '35px'


    },
    content: {
        // flexGrow: 1,
        // padding: theme.spacing(3),
        // transition: theme.transitions.create('margin', {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    dividerColor: {
        backgroundColor: 'black',
    },
    logo: {
        maxWidth: 140,
        // maxHeight: 30,
        marginLeft: '39%'
    },
    containerDrawer: {
        marginLeft: drawerWidth
    }


}));
const CharactersDetailsList = ({ characters, name }) => {
    const classes = useStyles();
    const [openDetailsList, setOpenDetailsList] = React.useState(false);
    // const [detailsList, setDetailsList] = React.useState({
    //     eye_color: {}
    // });
    const theme = useTheme();

    // const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    // };
    const handleDrawerOpenDetailsList = () => {
        setOpenDetailsList(true);

        console.log('abreLista')
    };

    const handleDrawerCloseDetailsList = () => {
        setOpenDetailsList(false);
    };


    return <div styles={{ backgroundColor: 'black' }}>
        <Button style={{ background: 'black', color: 'yellow' }} onClick={handleDrawerOpenDetailsList} variant="contained" color="inherit">
            {name}
        </Button>
        <Drawer

            className={classes.c}
            variant="persistent"
            anchor="left"
            open={openDetailsList}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>

                <IconButton onClick={handleDrawerCloseDetailsList}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize='small' /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            {characters.map((character, index) => (<List>

                <ListItem button>
                    <ListItemText key={index} primary={character.name} />
                    <ListItemText key={index} primary={character.eye_color} />

                </ListItem>

            </List>
            ))}


        </Drawer>
    </div>;
};

export default CharactersDetailsList;
