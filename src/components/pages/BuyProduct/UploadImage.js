import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        margin: '0px 1.2rem',
        transition: 'all 330ms',
        '& img': {
            // width: 60,
            height: '5rem',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor:'#f5f5f5',
            border: '1px solid #999',
            borderRadius: 4,
        },



        '& .MuiIconButton-root': {
            position: 'absolute',
            // top: 0,
            // right: 0,
            padding: 0,
            top: -12,
            right: -12,
            backgroundColor: '#fff',
            opacity: '0',
            transition: 'all 330ms',
        },
        '&:hover' : {
            transform: 'scale(1.05)',
            '& .MuiIconButton-root': {
                opacity: 1,
            }
        }
    }
}))


export default function UploadImage({link, zoomFunc, deleteFunc, closeBtn = true}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img
                src={link}
                onClick={zoomFunc}
            />

            {closeBtn && <IconButton
                onClick={deleteFunc}
                color="primary"
                children={<CancelIcon />}
            />}
    </div>
    )
}
