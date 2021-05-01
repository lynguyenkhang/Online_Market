import React from 'react'
import Alert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles';

const  useStyles = makeStyles(theme => ({
    alert: {
        margin: '20px 0px',
        border: '1px solid rgba(97,26,21,.1)',
    }
}))


function Warning({condition, content}) {

    const classes = useStyles()
    return (
        <div>
            {condition && <Alert severity="error" className={classes.alert}>
                {content}
            </Alert>}
        </div>
    )
}

export default Warning

