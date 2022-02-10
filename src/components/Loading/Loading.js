import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%',
        // color: 'yellow'
    },
}));

export default function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="primary" />
        </div>
    );
}
