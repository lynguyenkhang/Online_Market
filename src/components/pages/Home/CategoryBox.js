import {
    Avatar, Button,
    Container, Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    containerRoot: {
        backgroundColor: '#fff',
        margin: '10px 0px',
        paddingTop: 8,
        paddingBottom: 8,
    },

    containerList: {
        overflowX: 'scroll',
        scrollBehavior: 'smooth',
        padding: 0,
        overflowScrolling: 'touch !important',
        '& ul': {
            padding: '10px',
            listStyleType: 'none',
            display: 'flex',
            overflowX: 'hidden',
            width: 'max-content',
            margin: '0px',
        }
    },
    button: {
        marginRight: '1rem',
        fontSize: '1rem',
        transition: 'all 330ms',
        minWidth: 100,
        '& .MuiButton-label': { flexDirection: 'column' },
        '& .MuiAvatar-root': {
            margin: '0px auto 10px',
            width: 60,
            height: 60,
            backgroundColor: '#888',
        },
        '& .MuiTypography-root': { textTransform: 'none' },
    },
    buttonActive: {
        backgroundColor: '#eee !important',
        '& .MuiTypography-root': {
            color: '#035597 !important',
        }
    }
}))


function CategoryBox({ data, changeCategory }) {

    const classes = useStyles();
    const [choose, setChoose] = useState('Tất cả')

    const handleChoose = option => {
        changeCategory(option)
        setChoose(option)
    }


    return (
        <Container className={classes.containerRoot}>
            <Typography variant="h6">
                Danh mục
            </Typography>
            <Container disableGutters className={classes.containerList}>
                <Paper elevation={0} component="ul">
                    {data.map(({ category, image }) =>
                        <Button
                            key={category}
                            className={clsx(classes.button,
                                { [classes.buttonActive]: choose === category })}
                            onClick={() => handleChoose(category)}
                            disableElevation disableFocusRipple>
                            <Avatar src={image} alt={category} />
                            <Typography children={category} />
                        </Button>
                    )}
                </Paper>
            </Container>
        </Container>
    )
}

export default CategoryBox
