import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


function ZoomImage({condition, image, func}) {

    const useStyles = makeStyles(theme => ({
        image: {
            position: 'absolute',
            minWidth: '60vw',
            minHeight: '60vh',
            width: 'max-content',
            height: 'max-content',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${image})`,
    
            left: 'calc(50% - 30vw)',
            zIndex: '1',
    
            opacity: '0',
            willChange: 'opacity',
            pointerEvents: 'none',
            transition: 'opacity 330ms cubic-bezier(0,0,0.3,1)',
        },
        show: {
            pointerEvents: 'auto',
            opacity: 1,
        }
    }));

    const classes = useStyles()

    return (
        <div
            className={clsx(classes.image, {[classes.show]: condition,})}
            onClick={() => func()}
            alt="zoomed image" >
        </div>
    )
}

export default ZoomImage
