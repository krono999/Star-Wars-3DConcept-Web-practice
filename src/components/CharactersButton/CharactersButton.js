// React
import React from 'react';
// Material Ui Components
import { /* Grid, Paper, Typography,  */Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, IconButton, ListItem, ListItemText, Divider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
//material-ui Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//Components
import SearchBarCharacters from '../SearchBarCharacters/SearchBarCharacters'



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
        background: "purple",
        // backgroundColor: 'transparent',
        marginLeft: '210px',
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
                <h5>Personajes</h5>
                <IconButton onClick={handleDrawerCloseList}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize='small' /> : <ChevronRightIcon />}
                </IconButton>
            </div>

            <Divider />
            <List style={{ maxHeight: '100%', overflow: 'auto' }}>
                {[<SearchBarCharacters />].map((text, index) => (
                    <ListItem key={text}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Pagination count={8} variant="outlined" shape="rounded" />
            <Divider />
            <br />
            {characters.map(c => (
                <div key={c.id}>
                    <div >
                        <Button variant="outlined" color="black">
                            {c.name}
                        </Button>
                    </div>
                </div>
            ))}

        </Drawer>
    </div>;
};

export default CharactersButton;
