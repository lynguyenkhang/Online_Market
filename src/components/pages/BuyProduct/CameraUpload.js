import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import cameraIcon from '../../../assets/icons/blueCamera.png'
import plusIcon from '../../../assets/icons/bluePlus.png'
import {
    IconButton } from '@material-ui/core/';


const useStyles = makeStyles(theme => ({
    root : {
        cursor: 'pointer',
        marginRight: '.3rem',
        transition: 'all 330ms',
        '& >input': {display: 'none'},
        '&:hover': {
            transform: 'scale(1.05)',
        }
    },
    cameraIconBox: {
        position: 'relative',
        '& img:first-child': {width: '5rem'},
        '& img:last-child': {
            width: '16px',
            position: 'absolute',
            right: '-16px',
            top: '-11px',
        },
    },
}))

function CameraUpload({func}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                id="icon-button-file"
                type="file" 
                multiple
                onChange={func}
            />


            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <div className={classes.cameraIconBox}>
                        <img alt="camera icon" src={cameraIcon}/>
                        <img alt="upload icon" src={plusIcon}/>
                    </div>
                </IconButton>
            </label>
        </div>
    )
}

export default CameraUpload
