// React
import axios from 'axios'
import React from 'react';
// Material Ui Components
import { /* Grid, Paper, Typography,  *//* Button  */ } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, IconButton, ListItem, ListItemText, Divider, Button, Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
//material-ui Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//Components




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
    },
    detailsContainer: {
        paddingLeft: '10px'
    },


}));
const specificFilm = async (url) => {

    try {
        let { data } = await axios.get(url)
        let title = data.title
        return title;
    } catch (error) {
        console.log(error)
    }
}

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
            {characters.map((character, index) => (
                character.name === name &&
                <List>
                    <Grid className={classes.detailsContainer} container spacing={1}>
                        <Grid item xs={12} md={12} >
                            <Typography align='left' variant="h6" color="initial" >Nombre: {character.name}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <Typography align='left' variant="body2" color="initial ">color de Ojos: {character.eye_color}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}  >
                            <Typography align='left' variant="body2" color="initial">Altura: {character.height}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}  >
                            <Typography align='left' variant="body2" color="initial" >Peso: {character.mass}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}  >
                            <Typography align='left' variant="body2" color="initial" >Fecha de Nacimiento: {character.birth_year}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}  >
                            <Typography align='left' variant="body2" color="initial" >Genero: {character.gender}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}  >
                            <Typography align='left' variant="body2" color="initial" >Color de Piel: {character.skin_color}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}  >
                            <Typography align='left' variant="body2" color="initial" >Aparaciones en la Saga: </Typography>
                        </Grid>
                        {character.films.map((film, index) => (
                            <Grid className={classes.detailsContainer} container spacing={1}>
                                <Grid item xs={12} md={12}  >
                                    <Typography align='left' variant="body2" color="initial" >{film}</Typography>
                                </Grid>
                            </Grid>))}
                    </Grid>
                </List>
            ))}


        </Drawer>
    </div>;
};

export default CharactersDetailsList;
