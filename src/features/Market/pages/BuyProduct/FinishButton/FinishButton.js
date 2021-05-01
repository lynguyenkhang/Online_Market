
import { Button, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../../../../components/Layout';
import { useDispatch } from 'react-redux'
import {finishPostedProducts} from '../../../MarketSlice'

const useStyles = makeStyles(theme => ({
    button: {
        height: 45,
        letterSpacing: 3,
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem', 
        }
    },
}));


export default function NextStepButton({ url }) {
    const classes = useStyles();
    let history = useHistory();
    const dispatch = useDispatch()

    const handleClick = () => {
        setTimeout(() => {
            dispatch(finishPostedProducts())
            history.push(url)
        }, 500)
    }

    return (
        
        <Layout styles={{
            left: 0,
            position: 'fixed',
            bottom: 15,
            padding: '0px 24px',
        }} numberGrid={10} breakPoint="md" >

            <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleClick}
                fullWidth
                className={classes.button}
            >
                <Typography variant="body">
                    Kết thúc
                </Typography>
            </Button>
        </Layout>
    )
}
