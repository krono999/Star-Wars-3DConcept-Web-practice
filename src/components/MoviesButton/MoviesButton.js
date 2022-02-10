import React from 'react';
import { /* Grid, Paper, Typography,  */Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, IconButton, Divider, ListItem, ListItemText } from '@material-ui/core';
//material-ui Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { AccessibilityNewIcon, LocalMoviesIcon } from '@material-ui/icons';


//Components
import SearchBarMovies from '../SearchBarMovies/SearchBarMovies';


const drawerWidth = 390;

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
        marginLeft: '210px',
        marginTop: '69px'

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
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
const MoviesButton = ({ movies }) => {
    const classes = useStyles();
    const [openList, setOpenList] = React.useState(false);
    const theme = useTheme();

    // const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    // };
    const handleDrawerOpenList = () => {
        setOpenList(true);

        console.log('abreLista')
    };

    const handleDrawerCloseList = () => {
        setOpenList(false);
    };


    return <div /* styles={{ backgroundColor: 'black' }} */>
        <Button style={{ background: 'black', color: 'yellow' }} onClick={handleDrawerOpenList} variant="contained" color="inherit">
            Peliculas
        </Button>
        <Drawer

            className={classes.c}
            variant="persistent"
            anchor="left"
            open={openList}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <h5>Peliculas</h5>
                <IconButton onClick={handleDrawerCloseList}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize='small' /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {[<SearchBarMovies />].map((text, index) => (
                    <ListItem key={text}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            {movies.map(c => (
                <div key={c.id}>
                    <div style={{
                        padding: '4px',
                        borderRadius: 5,

                    }} >
                        <Button style={{
                            borderRadius: 5,
                            // backgroundColor: "orange",
                            // fontSize: "18px"

                        }} variant="outlined" color="inherit">
                            {c.title}
                        </Button>
                    </div>
                </div>
            ))}
        </Drawer>
    </div>;
};

export default MoviesButton;
