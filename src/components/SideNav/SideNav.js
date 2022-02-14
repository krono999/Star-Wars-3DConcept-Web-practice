//React
import React from 'react';
import clsx from 'clsx';
//Material-ui Components
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
//material-ui Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarWarsLogo from '../../assets/images/star-wars-4.svg'
// import MenuIcon from '@material-ui/icons/Menu';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
//Components
import CharactersButton from '../CharactersButton/CharactersButton';
import MoviesButton from '../MoviesButton/MoviesButton';
// import AudioPlayers from '../../components/AudioPlayer/AudioPlayer'



const drawerWidth = 210;

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
        background: "#ffa000"
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

export default function SideNav({ characters, movies }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{ background: 'black', border: "solid orange 3px" }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <AudioPlayers /> */}
                    <img src={StarWarsLogo} alt="logo" className={classes.logo} />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize='small' /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {[<CharactersButton characters={characters} />, <MoviesButton movies={movies} />].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <AccessibilityNewIcon /> : <LocalMoviesIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </div>
    );
}
