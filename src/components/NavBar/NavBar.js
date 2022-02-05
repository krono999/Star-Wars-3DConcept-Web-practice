import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SideBar from '../SideBar/SideBar'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: '#800080'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginLeft: '37%',
        flexGrow: 1,

    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: 'black', borderBlockColor: 'purple', border: "solid purple 2px", borderRadius: "1px" }} position="static">
                <Toolbar>

                    <SideBar />

                    <Typography variant="h6" className={classes.title}>
                        Star Wars
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
