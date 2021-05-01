import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
    overlay: {
        display: 'block',
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '101vw',
        height: '101vh',
        zIndex: 1,
        background: 'rgba(0,0,0,0.4)',
        opacity: 0,
        willChange: 'opacity',
        pointerEvents: 'none',
        transition: 'opacity 0.3s cubic-bezier(0,0,0.3,1)',
    },
    showOverlay: {
        pointerEvents: 'auto',
        opacity: 1,
    }
}));


export default function Overlay({condition, func}) {

    const classes = useStyles()
    return (
        <div
            className={clsx(classes.overlay, {[classes.showOverlay]: condition,})}
            onClick={() => func()}>
        </div>
    )
}
