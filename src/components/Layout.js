import React from 'react'
import { 
    Grid,
    Hidden
} from '@material-ui/core';

// spacing, styles

function Layout({numberGrid, breakPoint, spacing = 0, children, direction = 'row', styles}) {
    let xsDown = false;
    let smDown = false;
    let mdDown = false;
    let lgDown = false;

    let smNumber = false;
    let mdNumber = false;
    let lgNumber = false;
    let xlNumber = false;


    switch (breakPoint){
        case 'sm': xsDown = true; smNumber = numberGrid; break;
        case 'md': smDown = true; mdNumber = numberGrid; break;
        case 'lg': mdDown = true; lgNumber = numberGrid; break;
        case 'xl': lgDown = true; xlNumber = numberGrid; break;
    }




    return (
        <Grid style={styles} container >

            <Hidden xsDown={xsDown} smDown={smDown} mdDown={mdDown} lgDown={lgDown}>
                <Grid item md={(12 - numberGrid) / 2}></Grid>
            </Hidden>
            
            <Grid container direction={direction} item xs={12}
                sm={smNumber} md={mdNumber} lg={lgNumber} xl={xlNumber}>
                {children}
            </Grid>

            <Hidden xsDown={xsDown} smDown={smDown} mdDown={mdDown} lgDown={lgDown}>
                <Grid item md={(12 - numberGrid) / 2}></Grid>
            </Hidden>   
        </Grid>
    )
}

export default Layout
