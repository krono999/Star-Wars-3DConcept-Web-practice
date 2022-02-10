// React
import React from 'react';
// Material Ui Components
import { /* Grid, Paper, Typography,  */Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, IconButton, ListItem, ListItemText, Divider } from '@material-ui/core';
//material-ui Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
//Components
import SearchBarCharacters from '../SearchBarCharacters/SearchBarCharacters'



const drawerWidth = 240;

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
        background: "purple",
        // backgroundColor: 'transparent',
        marginLeft: '240px',
        marginTop: '70px'

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
const CharactersButton = ({ characters }) => {
    const classes = useStyles();
    const [openList, setOpenList] = React.useState(false);
    const theme = useTheme();

    // const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    // };
    const handleDrawerOpenList = () => {
        setOpenList(true);
        // <CharacterList />
        console.log('abreLista')
    };

    const handleDrawerCloseList = () => {
        setOpenList(false);
    };


    return <div styles={{ backgroundColor: 'black' }}>
        <Button onClick={handleDrawerOpenList} variant="outlined" color="black">
            Personajes
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
                <IconButton onClick={handleDrawerCloseList}>
                    {theme.direction === 'ltr' ? <ArrowBackIosIcon /> : <KeyboardArrowRightIcon />}
                </IconButton>
            </div>

            {/* {char.map(c => (
                <div key={c.id}>
                    <ListItemText>
                        {c.name}
                    </ListItemText>
                </div>
            ))} */}
            <Divider />
            <List>
                {[<SearchBarCharacters />].map((text, index) => (
                    <ListItem key={text}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

        </Drawer>
    </div>;
};

export default CharactersButton;
