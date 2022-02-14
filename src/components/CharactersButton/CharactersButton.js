// React
import React from 'react';
// Material Ui Components
import { /* Grid, Paper, Typography,  */Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, IconButton, ListItem, ListItemText, Divider, Grid, AppBar } from '@material-ui/core';
//material-ui Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//Components
import SearchBarCharacters from '../SearchBarCharacters/SearchBarCharacters'
import CharactersDetailsList from '../CharactersDetailsList/CharactersDetailsList';


const drawerWidth = 390;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        display: 'flex',
        overflow: 'hidden'
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
        height: '100%'
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#ffa000",
        marginLeft: '210px',
        marginTop: '70px',
        overflow: 'hidden',
        height: '100%',


    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        minHeight: '32px'


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
    },
    containerListCharacters: {
        height: '100%',
        overflow: "hidden",
        overflowY: "scroll"

    },
    abRoot: {
        backgroundColor: "#ffa000"
    },


}));
const CharactersButton = ({ characters }) => {
    const classes = useStyles();
    const [openList, setOpenList] = React.useState(false);
    // const [openDetailsList, setOpenDetailsList] = React.useState(false);
    const theme = useTheme();

    // const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    // };
    const handleDrawerOpenList = () => {
        setOpenList(true);
    };
    // const handleDrawerOpenDetailsList = () => {
    //     setOpenList(true);

    //     console.log('abreLista')
    // };


    const handleDrawerCloseList = () => {
        setOpenList(false);
    };


    return <div styles={{ backgroundColor: 'black' }}>
        <Button style={{ background: 'black', color: 'orange' }} onClick={handleDrawerOpenList} variant="contained" color="inherit">
            Personajes
        </Button>
        <Drawer

            className={classes.c}
            variant="persistent"
            anchor="left"
            open={openList}
            classes={{
                paper: classes.drawerPaper,
                overflow: 'hidden'
            }}
        >
            <AppBar classes={{
                root: classes.abRoot,

            }} position="sticky">
                <Grid styles={{ backgroundColor: 'black', }} container spacing={1}>
                    <Grid styles={{ backgroundColor: 'black' }} item md={12} xs={12}>
                        <div className={classes.drawerHeader}>
                            <h5 style={{ color: 'black' }}>Personajes</h5>
                            <IconButton onClick={handleDrawerCloseList}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize='small' /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item md={12} xs={12} >
                        <Divider variant='fullWidth' />
                        <List >
                            {[<SearchBarCharacters />].map((text, index) => (
                                <ListItem key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        {/* <Pagination count={characters} variant="outlined" shape="rounded" /> */}
                    </Grid>
                </Grid>
            </AppBar>

            <Grid className={classes.containerListCharacters} container spacing={1}>
                <Grid item>
                    {characters.map(charctr => (
                        <div style={{
                            padding: '2px',
                            borderRadius: 5,

                        }} key={charctr.id}>
                            <div  >
                                <Button characters={characters} style={{ background: 'black', color: 'orange', height: '100%' }}
                                    variant="contained"
                                    color="inherit">
                                    <CharactersDetailsList characters={characters} name={charctr.name} />
                                </Button>
                            </div>

                        </div>
                    ))}
                </Grid>
            </Grid>


        </Drawer>
    </div>;
};

export default CharactersButton;
