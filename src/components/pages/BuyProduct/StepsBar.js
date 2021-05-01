import React from 'react'
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#e5e5e5',
        // border: '1px solid #ddd',
    },
    determinate: {
        backgroundColor: '#33a837',
    }
}))


function StepsBar({percent}) {
    const classes = useStyles()
    return (
        <LinearProgress
            classes={{root: classes.root, bar: classes.determinate}}
            variant="determinate"
            value={percent}
        />
    )
}

export default StepsBar
